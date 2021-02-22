import $ from 'jquery';
//getting user data from database

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
export async function getLikedComments(comments){
  var comments_ids=[];
  comments.map((comment)=> comments_ids.push(comment.comment_id))
  const ans = await Promise.resolve($.post('http://localhost:8000/ReactApi/getUserCommentsLiked.php', {comments_ids:comments_ids,session_id:sessionStorage.getItem("session_id"),
                                                                                     username: sessionStorage.getItem("username"),
                                                                                    }))
  console.log(ans)
  const postResponse = JSON.parse(ans)
  return postResponse
}
export async function getCartItems(){
  const ans = await Promise.resolve($.post('http://localhost:8000/ReactApi/getCartItems.php',
   {session_id:sessionStorage.getItem("session_id"),
   username: sessionStorage.getItem("username"),
   }))
 
  const postResponse = JSON.parse(ans)
  
  return postResponse
  
}