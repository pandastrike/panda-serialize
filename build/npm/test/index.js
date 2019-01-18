"use strict";

var _amen = require("amen");

var _assert = _interopRequireDefault(require("assert"));

var _path = require("path");

var _pandaQuill = require("panda-quill");

var _src = require("../src");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data;
data = (0, _path.join)(__dirname, "data");

(async function () {
  return (0, _amen.print)((await (0, _amen.test)("panda-serialize", [(0, _amen.test)("YAML", [(0, _amen.test)("deserialize", function () {
    return _assert.default.deepEqual({
      foo: "bar"
    }, (0, _src.yaml)("foo: bar"));
  }), (0, _amen.test)("serialize", function () {
    return _assert.default.equal("foo: bar\n", (0, _src.yaml)({
      foo: "bar"
    }));
  }), (0, _amen.test)("inverse", function () {
    return _assert.default.equal("foo: bar\n", (0, _src.yaml)((0, _src.yaml)("foo: bar\n")));
  })]), (0, _amen.test)("JSON", [(0, _amen.test)("deserialize", function () {
    return _assert.default.deepEqual({
      foo: "bar"
    }, (0, _src.json)('{"foo":"bar"}'));
  }), (0, _amen.test)("serialize", function () {
    return _assert.default.equal('{"foo":"bar"}', (0, _src.json)({
      foo: "bar"
    }));
  }), (0, _amen.test)("inverse", function () {
    return _assert.default.equal('{"foo":"bar"}', (0, _src.json)((0, _src.json)('{"foo":"bar"}')));
  })])])));
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZC9SZXBvc2l0b3JpZXMvcGFuZGEtc2VyaWFsaXplL3Rlc3QvaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFKQSxJQUFBLElBQUE7QUFLQSxJQUFBLEdBQU8sZ0JBQUEsU0FBQSxFQUFBLE1BQUEsQ0FBUDs7QUFFRyxDQUFBLGtCQUFBO1NBQ0Qsa0JBQU0sTUFBTSxnQkFBQSxpQkFBQSxFQUF3QixDQUNsQyxnQkFBQSxNQUFBLEVBQWEsQ0FDWCxnQkFBQSxhQUFBLEVBQW9CLFlBQUE7V0FDbEIsZ0JBQUEsU0FBQSxDQUFpQjtBQUFBLE1BQUEsR0FBQSxFQUFLO0FBQUwsS0FBakIsRUFBNkIsZUFBN0IsVUFBNkIsQ0FBN0IsQztBQUZTLEdBQ1gsQ0FEVyxFQUlYLGdCQUFBLFdBQUEsRUFBa0IsWUFBQTtXQUNoQixnQkFBQSxLQUFBLENBQUEsWUFBQSxFQUEyQixlQUFLO0FBQUEsTUFBQSxHQUFBLEVBQUs7QUFBTCxLQUFMLENBQTNCLEM7QUFMUyxHQUlYLENBSlcsRUFPWCxnQkFBQSxTQUFBLEVBQWdCLFlBQUE7V0FDZCxnQkFBQSxLQUFBLENBQUEsWUFBQSxFQUEyQixlQUFLLGVBQWhDLFlBQWdDLENBQUwsQ0FBM0IsQztBQVJTLEdBT1gsQ0FQVyxDQUFiLENBRGtDLEVBWWxDLGdCQUFBLE1BQUEsRUFBYSxDQUNYLGdCQUFBLGFBQUEsRUFBb0IsWUFBQTtXQUNsQixnQkFBQSxTQUFBLENBQWlCO0FBQUEsTUFBQSxHQUFBLEVBQUs7QUFBTCxLQUFqQixFQUE2QixlQUE3QixlQUE2QixDQUE3QixDO0FBRlMsR0FDWCxDQURXLEVBSVgsZ0JBQUEsV0FBQSxFQUFrQixZQUFBO1dBQ2hCLGdCQUFBLEtBQUEsQ0FBQSxlQUFBLEVBQThCLGVBQUs7QUFBQSxNQUFBLEdBQUEsRUFBSztBQUFMLEtBQUwsQ0FBOUIsQztBQUxTLEdBSVgsQ0FKVyxFQU9YLGdCQUFBLFNBQUEsRUFBZ0IsWUFBQTtXQUNkLGdCQUFBLEtBQUEsQ0FBQSxlQUFBLEVBQThCLGVBQUssZUFBbkMsZUFBbUMsQ0FBTCxDQUE5QixDO0FBUlMsR0FPWCxDQVBXLENBQWIsQ0Faa0MsQ0FBeEIsQ0FBWixFO0FBREYsQ0FBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJpbnQsIHRlc3R9IGZyb20gXCJhbWVuXCJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiXG5pbXBvcnQge2pvaW59IGZyb20gXCJwYXRoXCJcbmltcG9ydCB7cmVhZH0gZnJvbSBcInBhbmRhLXF1aWxsXCJcbmltcG9ydCB7eWFtbCwganNvbn0gZnJvbSBcIi4uL3NyY1wiXG5kYXRhID0gam9pbiBfX2Rpcm5hbWUsIFwiZGF0YVwiXG5cbmRvIC0+XG4gIHByaW50IGF3YWl0IHRlc3QgXCJwYW5kYS1zZXJpYWxpemVcIiwgW1xuICAgIHRlc3QgXCJZQU1MXCIsIFtcbiAgICAgIHRlc3QgXCJkZXNlcmlhbGl6ZVwiLCAtPlxuICAgICAgICBhc3NlcnQuZGVlcEVxdWFsIGZvbzogXCJiYXJcIiwgeWFtbCBcImZvbzogYmFyXCJcblxuICAgICAgdGVzdCBcInNlcmlhbGl6ZVwiLCAtPlxuICAgICAgICBhc3NlcnQuZXF1YWwgXCJmb286IGJhclxcblwiLCB5YW1sIGZvbzogXCJiYXJcIlxuXG4gICAgICB0ZXN0IFwiaW52ZXJzZVwiLCAtPlxuICAgICAgICBhc3NlcnQuZXF1YWwgXCJmb286IGJhclxcblwiLCB5YW1sIHlhbWwgXCJmb286IGJhclxcblwiXG4gICAgXVxuXG4gICAgdGVzdCBcIkpTT05cIiwgW1xuICAgICAgdGVzdCBcImRlc2VyaWFsaXplXCIsIC0+XG4gICAgICAgIGFzc2VydC5kZWVwRXF1YWwgZm9vOiBcImJhclwiLCBqc29uICd7XCJmb29cIjpcImJhclwifSdcblxuICAgICAgdGVzdCBcInNlcmlhbGl6ZVwiLCAtPlxuICAgICAgICBhc3NlcnQuZXF1YWwgJ3tcImZvb1wiOlwiYmFyXCJ9JywganNvbiBmb286IFwiYmFyXCJcblxuICAgICAgdGVzdCBcImludmVyc2VcIiwgLT5cbiAgICAgICAgYXNzZXJ0LmVxdWFsICd7XCJmb29cIjpcImJhclwifScsIGpzb24ganNvbiAne1wiZm9vXCI6XCJiYXJcIn0nXG4gICAgXVxuXG4gIF1cbiJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=/Users/david/Repositories/panda-serialize/test/index.coffee