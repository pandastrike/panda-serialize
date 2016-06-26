# panda-serialize

Dead simple interface for serializing data formats.

Currently supported formats: JSON, YAML.

```coffee
# YAML string -> object
yaml "foo: bar"

# object -> YAML string
yaml foo: "bar"
```

Also supports explicit invocation of `from` and `to`,
ex: `yaml.from "foo: bar"`.

## Install

```
npm install panda-serialize
```
