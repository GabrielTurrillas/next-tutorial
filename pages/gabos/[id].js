export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();

  const paths = data.map(gabo => {
    return {
      params: { id: gabo.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json();

  return {
    props: { gabo: data }
  }
}

const Details = ({ gabo }) => {
  return (
    <div>
      <h1>{gabo.name}</h1>
      <p>{gabo.email}</p>
      <p>{gabo.website}</p>
      <p>{gabo.address.city}</p>
    </div>
  );
}

export default Details;