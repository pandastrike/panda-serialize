Amen = require "amen"
assert = require "assert"
{join} = require "path"
{read} = require "fairmont-filesystem"
{yaml, json} = require "../src"
data = join __dirname, "data"

Amen.describe "panda-serialize", (context) ->

  context.test "YAML", (context) ->

    context.test "deserialize", ->
      assert.deepEqual foo: "bar", yaml "foo: bar"

    context.test "serialize", ->
      assert.equal "foo: bar\n", yaml foo: "bar"

    context.test "inverse", ->
      assert.equal "foo: bar\n", yaml yaml "foo: bar\n"

  context.test "JSON", (context) ->

    context.test "deserialize", ->
      assert.deepEqual foo: "bar", json '{"foo":"bar"}'

    context.test "serialize", ->
      assert.equal '{"foo":"bar"}', json foo: "bar"

    context.test "inverse", ->
      assert.equal '{"foo":"bar"}', json json '{"foo":"bar"}'
