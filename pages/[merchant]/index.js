import Footer from "../../components/core/Footer";
import FeaturedCauses from "../../components/FeaturedCauses";
import FindCauses from "../../components/FindCauses";
import Header from "../../components/Header";
import SelectedCause from "../../components/SelectedCause";

function MerchantPage() {
  return (
    <div className="flex flex-col w-full h-full gap-10 pt-40">
      <Header />
      <FeaturedCauses />
      <FindCauses />
      <SelectedCause />
      <Footer />
    </div>
  );
}

export default MerchantPage;
