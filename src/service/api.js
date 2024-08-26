import request from '@/service/index'

/**
 * @name: 获取模型评测列表
 */
export function getAssessListAPI(data) {
    return request({
        url: `/task/page`,
        method: 'post',
        data
    })
}