import $, { post } from 'jquery'
export async function getCartItems(){
  //aici faci post
  const ans = await Promise.resolve($.post('http://localhost:8000/ReactApi/getCartItems.php', {session_id:sessionStorage.getItem("session_id"),
                                                                                      username: sessionStorage.getItem("username"),
                                                                                    }))
  console.log(ans)
  const postResponse = JSON.parse(ans)
  console.log(postResponse)
  return postResponse
  
}