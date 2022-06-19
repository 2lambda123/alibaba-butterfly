import { getVisibleLayerIDs } from './disabled';
import batchingToposort from 'batching-toposort';
const { edges } = require('../data.json');

export const getLayerNodes = (node, layer) => {
  let nodeLayer = node.layer;
  let nodeIDs = node.ids;
  let layerIDs = layer.ids;
  if (!layerIDs.length) {
    return [];
  }
  const layerNodes = {};
  for (const nodeID of nodeIDs) {
    const layer = nodeLayer[nodeID];
    if (!layerNodes[layer]) {
      layerNodes[layer] = [];
    }
    layerNodes[layer].push(nodeID);
  }
  return layerIDs.map((layerID) => layerNodes[layerID]);
}

export const getNodeRank = (node, layer) => {
  const layerIDs = getVisibleLayerIDs(node, layer);
  let layerNodes = getLayerNodes(node, layer);
  let nodeIDs = node.ids;
  if (!layerIDs.length) {
    return {};
  }
  const nodeDeps = {};
  for (const nodeID of nodeIDs) {
    nodeDeps[nodeID] = [];
  }
  for (const edge of edges) {
    nodeDeps[edge.source].push(edge.target);
  }

  for (let i = 1; i < layerNodes.length; i++) {
    for (const sourceID of layerNodes[i - 1]) {
      for (const targetID of layerNodes[i]) {
        nodeDeps[sourceID].push(targetID);
      }
    }
  }

  const toposortedNodes = batchingToposort(nodeDeps);

  const nodeRanks = {};
  for (let rank = 0; rank < toposortedNodes.length; rank++) {
    for (const nodeID of toposortedNodes[rank]) {
      nodeRanks[nodeID] = rank;
    }
  }

  return nodeRanks;
}