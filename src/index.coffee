import {Method} from "panda-generics"
import {isString, isObject, isArray, fromJSON, toJSON} from "panda-parchment"
import YAML from "js-yaml"

toYAML = (data) -> YAML.safeDump data
fromYAML = (yaml) -> YAML.safeLoad yaml

yaml = Method.create default: (args...) ->
  throw new Error "panda-serialize:yaml no match on #{args}"

Method.define yaml, isString, fromYAML
Method.define yaml, isObject, toYAML
Method.define yaml, isArray, toYAML

yaml.from = fromYAML
yaml.to = toYAML

json = Method.create default: (args...) ->
  throw new Error "panda-serialize:json no match on #{args}"

Method.define json, isString, fromJSON
Method.define json, isObject, toJSON
Method.define json, isArray, toJSON

json.from = fromJSON
json.to = toJSON

export {json, yaml}
