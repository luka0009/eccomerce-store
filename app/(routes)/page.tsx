import getBillboard from "@/actions/get-billboard";
import Container from "@/components/container";
import Billboard from "@/components/ui/billboard";

export const revalidate = 0;

const HomePage = async () => {
	const billboard = await getBillboard("ad760247-2261-4a75-9ae0-3c6022b75291");
	
  console.log('billboard');
  return (
		<div>
			<Container>
				<div className="space-y-10 pb-10">
					<Billboard data={billboard} />
				</div>
			</Container>
		</div>
	);
};

export default HomePage;
