export default function Friend({ friend }) {
  console.log(friend);
  const { name,email,phone } = friend;
  return (
    <div className="card">
      <h4>Name: {name}</h4>
      <h4>Email: {email}</h4>
      <p>Phone: {phone}</p>
    </div>
  );
}
