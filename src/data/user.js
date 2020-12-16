import $ from 'jquery';
export async function getUserDetails () {
  const ans = await Promise.resolve($.post('http://localhost:8000/ReactApi/getUserDetails.php', {session_id:sessionStorage.getItem("session_id"),
                                                                                     username: sessionStorage.getItem("username"),
                                                                                    }))
  console.log(ans)
  const postResponse = JSON.parse(ans)
  return postResponse;                                                                                   
}
export async function getUserReview(product_id){
  const ans = await Promise.resolve($.post('http://localhost:8000/ReactApi/getUserReview.php', {product_id:product_id,session_id:sessionStorage.getItem("session_id"),
                                                                                     username: sessionStorage.getItem("username"),
                                                                                    }))
  console.log(ans)
  const postResponse = JSON.parse(ans)
  return postResponse;    
}