const baseUrl = 'https://api.jef.site';

function request(params) {
  // 混入默认请求头
  if (!params.header) params.header = {};
  params.header = Object.assign(
    {
      'content-type': 'application/x-www-form-urlencoded',
    },
    params.header,
  );

  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + params.url,
      method: params.method || 'GET',
      data: params.data || {},
      header: params.header,
      success: res => resolve(res.data),
      fail: reject,
    });
  });
}

request.get = function(url, data, header) {
  return request({
    url,
    method: 'GET',
    data,
    header,
  });
};
request.post = function(url, data, header) {
  return request({
    url,
    method: 'POST',
    data,
    header,
  });
};
request.put = function(url, data, header) {
  return request({
    url,
    method: 'PUT',
    data,
    header,
  });
};
request.delete = function(url, data, header) {
  return request({
    url,
    method: 'DELETE',
    data,
    header,
  });
};

export default request;
