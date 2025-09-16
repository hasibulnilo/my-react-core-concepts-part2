export default function Post({post}){

return (
<div className="card">

<p>{post.body}</p>
<p>{post.title}</p>
<p>{post.userId}</p>

</div>


)

}