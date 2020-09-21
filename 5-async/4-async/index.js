async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  try {
    const result = await fetch(url);
    console.log(result);
    const data = await result.json();
    console.log(data);
    const result2 = await fetch(URL_JS);
    const data2 = await result2.json();
    console.log(data2);
  } catch (error) {
    console.log('rejected');
  }
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
