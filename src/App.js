import Card from "./Card";
function App() {
	let data = [
		{
			plan: "FREE",
			price: "0",
			users: "Single User",
			isUsers: true,
			storage: "5GB Storage",
			isStorage: true,
			publicProjects: "Unlimited Public Projects",
			isPublicProjects: true,
			communityAccess: "Community Access",
			isCommunityAccess: true,
			privateProjects: "Unlimited Private Projects",
			isPrivateProjects: false,
			phoneSupport: "Dedicated Phone Support",
			isPhoneSupport: false,
			subDomain: "Free Subdomain",
			isSubDomain: false,
			reports: "Monthly Status Reports",
			isReports: false,
		},
		{
			plan: "PLUS",
			price: "9",
			users: "5 Users",
			isUsers: true,
			storage: "50GB Storage",
			isStorage: true,
			publicProjects: "Unlimited Public Projects",
			isPublicProjects: true,
			communityAccess: "Community Access",
			isCommunityAccess: true,
			privateProjects: "Unlimited Private Projects",
			isPrivateProjects: true,
			phoneSupport: "Dedicated Phone Support",
			isPhoneSupport: true,
			subDomain: "Free Subdomain",
			isSubDomain: true,
			reports: "Monthly Status Reports",
			isReports: false,
		},
		{
			plan: "PRO",
			price: "49",
			users: "Unlimited Users",
			isUsers: true,
			storage: "150GB Storage",
			isStorage: true,
			publicProjects: "Unlimited Public Projects",
			isPublicProjects: true,
			communityAccess: "Community Access",
			isCommunityAccess: true,
			privateProjects: "Unlimited Private Projects",
			isPrivateProjects: true,
			phoneSupport: "Dedicated Phone Support",
			isPhoneSupport: true,
			subDomain: "Unlimited Free Subdomains",
			isSubDomain: true,
			reports: "Monthly Status Reports",
			isReports: true,
		},
	];

	return (
		<>
			{/* <!-- This snippet uses Font Awesome 5 Free as a dependency. You can download it at fontawesome.io! --> */}

			<section className="pricing py-5">
				<div className="container">
					<div className="row">
						{/* <Card data = {data[0]}/>
     <Card data = {data[1]}/>
     <Card data = {data[2]}/> */}

						{data.map((e, i) => {
							return <Card data={e} key={i} />;
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default App;
