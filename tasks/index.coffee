{tools} = require "panda-builder"
p9k = require "panda-9000"

{target} = tools p9k

target "npm"
target "web"

process.on "unhandledRejection", (reason) ->
  console.error "Unhandled Rejection", reason
