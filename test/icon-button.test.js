import test from 'ava';
import resin from 'resin';
import fs from 'fs';

test('mobile dark', t => {
  const actual = fs.readFileSync('../css/mobile-dark-icon-button.css','utf-8').trim();
  const expected = fs.readFileSync('./expected/mobile-dark-icon-button.css','utf-8').trim();
  t.is(actual, expected);
});

test('mobile light', t => {
  const actual = fs.readFileSync('../css/mobile-light-icon-button.css','utf-8').trim();
  const expected = fs.readFileSync('./expected/mobile-light-icon-button.css','utf-8').trim();
  t.is(actual, expected);
});

test('desktop light', t => {
  const actual = fs.readFileSync('../css/desktop-light-icon-button.css','utf-8').trim();
  const expected = fs.readFileSync('./expected/desktop-light-icon-button.css','utf-8').trim();
  t.is(actual, expected);
});

test('desktop dark', t => {
  const actual = fs.readFileSync('../css/desktop-light-icon-button.css','utf-8').trim();
  const expected = fs.readFileSync('./expected/desktop-light-icon-button.css','utf-8').trim();
  t.is(actual, expected);
});
// /**
//  *
//  * Copyright 2012 Adobe Systems Inc.;
//  *
//  * Licensed under the Apache License, Version 2.0 (the "License");
//  * you may not use this file except in compliance with the License.
//  * You may obtain a copy of the License at
//  *
//  * http://www.apache.org/licenses/LICENSE-2.0
//  *
//  * Unless required by applicable law or agreed to in writing, software
//  * distributed under the License is distributed on an "AS IS" BASIS,
//  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  * See the License for the specific language governing permissions and
//  * limitations under the License.
//  *
//  */
//
// /*global require, describe, it*/
//
// var grunt = require('grunt'),
//     assert = require('assert');
//
// describe('Topcoat Icon Button', function() {
//     'use strict';
//     it('should output the correct desktop dark css', function() {
//         var actual = grunt.file.read('css/topcoat-icon-button-desktop-dark.css');
//         var expected = grunt.file.read('test/expected/topcoat-icon-button-desktop-dark.css');
//         assert.equal(actual, expected, 'should generate correct css');
//     });
//
//     it('should output the correct desktop light css', function() {
//         var actual = grunt.file.read('css/topcoat-icon-button-desktop-light.css');
//         var expected = grunt.file.read('test/expected/topcoat-icon-button-desktop-light.css');
//         assert.equal(actual, expected, 'should generate correct css');
//     });
//
//     it('should output the correct mobile dark css', function() {
//         var actual = grunt.file.read('css/topcoat-icon-button-mobile-dark.css');
//         var expected = grunt.file.read('test/expected/topcoat-icon-button-mobile-dark.css');
//         assert.equal(actual, expected, 'should generate correct css');
//     });
//
//     it('should output the correct mobile light css', function() {
//         var actual = grunt.file.read('css/topcoat-icon-button-mobile-light.css');
//         var expected = grunt.file.read('test/expected/topcoat-icon-button-mobile-light.css');
//         assert.equal(actual, expected, 'should generate correct css');
//     });
//
//     it('should not have any unrendered variables in desktop dark', function() {
//         var actual = grunt.file.read('css/topcoat-icon-button-desktop-dark.css');
//         assert.equal(actual.match(/var-[a-z-]*[a-z]+/g), null, 'should not have missing vars');
//     });
//
//     it('should not have any unrendered variables in desktop light', function() {
//         var actual = grunt.file.read('css/topcoat-icon-button-desktop-light.css');
//         assert.equal(actual.match(/var-[a-z-]*[a-z]+/g), null, 'should not have missing vars');
//     });
//
//     it('should not have any unrendered variables in mobile dark', function() {
//         var actual = grunt.file.read('css/topcoat-icon-button-mobile-dark.css');
//         assert.equal(actual.match(/var-[a-z-]*[a-z]+/g), null, 'should not have missing vars');
//     });
//
//     it('should not have any unrendered variables in mobile light', function() {
//         var actual = grunt.file.read('css/topcoat-icon-button-mobile-light.css');
//         assert.equal(actual.match(/var-[a-z-]*[a-z]+/g), null, 'should not have missing vars');
//     });
//
// });
//
