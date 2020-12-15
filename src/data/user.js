import $ from 'jquery';
export async function getUserDetails () {
  const ans = await Promise.resolve($.post('http://localhost:8000/ReactApi/getUserDetails.php', {session_id:sessionStorage.getItem("session_id"),
                                                                                     username: sessionStorage.getItem("username"),
                                                                                    }))
  console.log(ans)
  const postResponse = JSON.parse(ans)
  return postResponse;                                                                                   
}
