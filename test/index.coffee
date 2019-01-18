import {print, test} from "amen"
import assert from "assert"
import {join} from "path"
import {read} from "panda-quill"
import {yaml, json} from "../src"
data = join __dirname, "data"

do ->
  print await test "panda-serialize", [
    test "YAML", [
      test "deserialize", ->
        assert.deepEqual foo: "bar", yaml "foo: bar"

      test "serialize", ->
        assert.equal "foo: bar\n", yaml foo: "bar"

      test "inverse", ->
        assert.equal "foo: bar\n", yaml yaml "foo: bar\n"
    ]

    test "JSON", [
      test "deserialize", ->
        assert.deepEqual foo: "bar", json '{"foo":"bar"}'

      test "serialize", ->
        assert.equal '{"foo":"bar"}', json foo: "bar"

      test "inverse", ->
        assert.equal '{"foo":"bar"}', json json '{"foo":"bar"}'
    ]

  ]
