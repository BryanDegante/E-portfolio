import AddOns from "../components/Services/AddOns";
import FAQ from "../components/Services/FAQ";
import ServiceLanding from "../components/Services/ServiceLanding";
import Tiers from "../components/Services/Tiers";

const Services = ({ openContact }) => {
	return (
		<main>
			<ServiceLanding openContact={openContact} />
			<Tiers />
			<AddOns />
			<FAQ />
		</main>
	);
};

export default Services;
