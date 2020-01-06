import React from 'react';
import {View} from 'react-native';
import renderer from 'react-test-renderer';

describe('Sample', () => {
    it('tests', () => {
      const inst = renderer.create(
        <View/>
      );
      expect(1).toEqual(1);
    });
  });