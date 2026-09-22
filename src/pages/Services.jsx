import AddOns from "../components/Services/AddOns";
import FAQ from "../components/Services/FAQ";
import ServiceLanding from "../components/Services/ServiceLanding";
import Tiers from "../components/Services/Tiers";

const Services = ({ openContact, language, isLoaded }) => {
	return (
		<main>
			<ServiceLanding openContact={openContact} language={language} isLoaded={isLoaded}/>
			<Tiers  language={language}/>
			<AddOns language={language}/>
			<FAQ language={language}/>
		</main>
	);
};

export default Services;
