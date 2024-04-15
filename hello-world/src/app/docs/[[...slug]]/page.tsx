function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  

  return (
    <div>
      <h1> page has {params?.slug?.length | 0} layers</h1>
    </div>
  );
}
 
export default Docs;
