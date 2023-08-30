import Button from "../../components/Button";
import Heading from "../../components/Heading";

export default function BedsWeProvide() {
  return (
    <div className="container">
      <div className="py-20 space-y-10">
        <Heading>Our Exclusive Room</Heading>
        <section className="flex space-x-10">
          <div className="flex space-x-6 w-full items-center justify-between">
            <img className="h-44 w-full object-cover rounded-lg" src="src\assets\img\room-1.jpg" alt="" />
            <div className=" space-y-2">
              <h3 className="text-2xl">VIP</h3>
              <p className="text-gray-500 italic text-sm">
                <q>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, magni.</q>
              </p>
              <Button className="bg-blue-500 rounded-full px-4 leading-8 text-white">
                Learn More <i className="fa-solid fa-chevron-right"></i>
              </Button>
            </div>
          </div>
          <div className="flex space-x-6 w-full items-center justify-between">
            <img className="h-44 w-full object-cover rounded-lg" src="src\assets\img\room-1.jpg" alt="" />
            <div className=" space-y-2">
              <h3 className="text-2xl">Business</h3>
              <p className="text-gray-500 italic text-sm">
                <q>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, magni.</q>
              </p>
              <Button className="bg-blue-500 rounded-full px-4 leading-8 text-white">
                Learn More <i className="fa-solid fa-chevron-right"></i>
              </Button>
            </div>
          </div>
        </section>
        <section className="flex space-x-10">
          <div className="flex space-x-6 w-full items-center justify-between">
            <div className=" space-y-2">
              <h3 className="text-2xl">VIP</h3>
              <p className="text-gray-500 italic text-sm">
                <q>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, magni.</q>
              </p>
              <Button className="bg-blue-500 rounded-full px-4 leading-8 text-white">
                Learn More <i className="fa-solid fa-chevron-right"></i>
              </Button>
            </div>
            <img className="h-44 w-full object-cover rounded-lg" src="src\assets\img\room-1.jpg" alt="" />
          </div>
          <div className="flex space-x-6 w-full items-center justify-between">
            <div className=" space-y-2">
              <h3 className="text-2xl">Business</h3>
              <p className="text-gray-500 italic text-sm">
                <q>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, magni.</q>
              </p>
              <Button className="bg-blue-500 rounded-full px-4 leading-8 text-white">
                Learn More <i className="fa-solid fa-chevron-right"></i>
              </Button>
            </div>
            <img className="h-44 w-full object-cover rounded-lg" src="src\assets\img\room-1.jpg" alt="" />
          </div>
        </section>
      </div>
    </div>
  );
}
