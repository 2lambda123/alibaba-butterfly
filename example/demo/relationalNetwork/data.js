import User from './node_user.js';
import Train from './node_train.js';
import Phone from './node_phone.js';
import Email from './node_email.js';

export default {
  nodes: [{
    id: '1',
    name: '王大萌',
    type: 'people',
    left: 0,
    top: 200,
    Class: User,
  }, {
    id: '2',
    name: 'K1239',
    type: 'train',
    left: 150,
    top: 50,
    Class: Train,
  }, {
    id: '3',
    name: '5144xxxxxx@qq.com',
    type: 'email',
    left: 300,
    top: 110,
    Class: Email,
  }, {
    id: '4',
    name: 'D1228',
    type: 'train',
    left: 210,
    top: 260,
    Class: Train,
    scope: 'leftg',
  }, {
    id: '5',
    name: '51449xxxx@qq.com',
    type: 'email',
    left: 400,
    top: 220,
    Class: Email,
    scope: 'centerg',
  }, {
    id: '6',
    name: '18703224669',
    type: 'people',
    left: 500,
    top: 90,
    Class: User,
    scope: 'centerg',
  }, {
    id: '7',
    name: '王小萌',
    type: 'people',
    left: 600,
    top: 200,
    Class: User,
    scope: 'centerg',
  }, {
    id: '8',
    name: 'email',
    type: 'email',
    left: 800,
    top: 100,
    Class: Email,
    scope: 'centerg',
  }, {
    id: '9',
    name: '联系方式',
    type: 'phone',
    left: 1100,
    top: 300,
    Class: Phone,
    scope: 'centerg',
  }, {
    id: '10',
    name: 'G887',
    type: 'train',
    left: 1000,
    top: 30,
    Class: Train,
    scope: 'rightg',
  }, {
    id: '11',
    name: '王中萌',
    type: 'people',
    left: 1200,
    top: 200,
    Class: User,
    scope: 'rightg',
  }, {
    id: '12',
    name: '王也',
    type: 'people',
    left: 1300,
    top: 100,
    Class: User,
    scope: 'rightg',
  }],
  edges: [{
    source: '1',
    target: '2'
  }, {
    source: '1',
    target: '3'
  }, {
    source: '1',
    target: '4'
  }, {
    source: '5',
    target: '6'
  }, {
    source: '6',
    target: '7'
  }, {
    source: '7',
    target: '8'
  }, {
    source: '8',
    target: '9'
  }, {
    source: '10',
    target: '11'
  }, {
    source: '11',
    target: '12'
  }, {
    source: '12',
    target: '10'
  }]
};
