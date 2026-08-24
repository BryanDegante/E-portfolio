import AddOns from "../components/Services/AddOns";
import ServiceLanding from "../components/Services/ServiceLanding";
import Tiers from "../components/Services/Tiers";

const Services = ({ openContact }) => {
	return (
		<main>
			<ServiceLanding openContact={openContact} />
			<Tiers />
			<AddOns />
		</main>
	);
};

export default Services;
