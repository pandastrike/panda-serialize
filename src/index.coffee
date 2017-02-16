{isString, isObject, isArray, fromJSON, toJSON, Method} = require "fairmont"
YAML = require "js-yaml"

toYAML = (data) -> YAML.safeDump data
fromYAML = (yaml) -> YAML.safeLoad yaml

yaml = Method.create()

Method.define yaml, isString, fromYAML
Method.define yaml, isObject, toYAML
Method.define yaml, isArray, toYAML

yaml.from = fromYAML
yaml.to = toYAML

json = Method.create()

Method.define json, isString, fromJSON
Method.define json, isObject, toJSON
Method.define json, isArray, toJSON

json.from = fromJSON
json.to = toJSON

module.exports = {json, yaml}
