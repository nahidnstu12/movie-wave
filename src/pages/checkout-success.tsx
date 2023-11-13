import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';
import PaymentSuccess from '@/components/ui/paymentSuccess';

const Checkout = () => {
  return (
    <div>
      <Header />
      <div className="container py-24 flex flex-col gap-8">
        <div>
          <h2 className="text-xl  font-thin text-gray">
            Welcome to OneFlix Family 🎊
          </h2>
          <h1 className="text-xxl text-white">Mahmudul Hasan Manik!</h1>
        </div>
        <PaymentSuccess />
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
