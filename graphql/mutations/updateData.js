const {
  GraphQLInt
} = require('graphql')

let count = 0

module.exports = {
  type: GraphQLInt,  // 定义返回的数据类型
  description: '修改例子',
  args: {  // 定义传参的数据结构
    num: {
      type: GraphQLInt,
      description: '数量'
    }
  },
  resolve: (root, params) => {
    let { num } = params
    count += num
    return count
  }
}