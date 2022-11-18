import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import{faFaceSmile}from "@fortawesome/free-regular-svg-icons"

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
    <div className="flex flex-col justify-evenly w-96 border-2 rounded-xl bg-white shadow-xl shadow-black">
      {/* Header Component */}
      <div className="flex justify-start px-5 py-5">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <div>
          <h3 className="pl-3 font-semibold">Wade Weirdo</h3>
          <h4 className="pl-3 text-slate-500">July 17,2018</h4>
        </div>
      </div>
      {/* heading */}
      <div className="pl-5">
        <label className="font-bold text-2xl">
          Web Design templates Selection
        </label>
      </div>
      {/* images Component */}
      <div className="pt-4">
        <div className="grid grid-cols-3 px-4 pl-5 gap-1">
          <img
            className="h-20 rounded-tl-lg"
            src="https://images.pexels.com/photos/949796/pexels-photo-949796.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <img
            className="h-20"
            src="https://images.pexels.com/photos/37836/silhouette-fitness-bless-you-bike-37836.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <img
            className="h-20 rounded-tr-lg"
            src="https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
       </div>
        <div className="grid grid-cols-2 gap-1 px-4 pl-5 pt-1">
          <img
            className="rounded-bl-lg"
            src="https://images.pexels.com/photos/9768277/pexels-photo-9768277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <img
            className="rounded-br-lg"
            src="https://images.pexels.com/photos/1280560/pexels-photo-1280560.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
           </div>
        
      </div>
      {/* paragraph component */}
      <div className="pt-2">
        <p className="pl-5 text-sm">
          lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      {/* like component */}
      <div className="pt-4">
        <label className="pl-5 text-red-600">
          <FontAwesomeIcon className="cursor-pointer" icon={faHeart} />
          <span className="pl-2 text-black">34</span>
        </label>
      </div>
      {/* search component */}
      <div className="pl-5 pt-4 flex">
        <div className="bg-slate-100 rounded-md">
        <input
          className="bg-slate-100 pl-2 h-8 rounded-md outline-none"
          type="text"
          placeholder="Write a comment"
        />
        <FontAwesomeIcon className="pt-2 pl-10 cursor-pointer" icon={faFaceSmile} />
        <FontAwesomeIcon className="pt-2 pl-2 text-blue-500 cursor-pointer" icon={faPaperPlane} />
      </div>
      </div>
      {/* profile 1 */}

      <div className="flex justify-start px-5 py-5">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <div>
          <h3 className="pl-3 font-semibold">
            Leslie Alexander
            <span className="pl-3 text-slate-400">25 minutes ago</span>
          </h3>
          <h4 className="pl-3">Lorem ipsum dolor sit, consectetur.</h4>
          <label className="pl-3">
            <FontAwesomeIcon className="text-red-600 cursor-pointer" icon={faHeart} />
            <span className="pl-2 text-black">12</span>
            <span className="pl-7 text-slate-600 cursor-pointer">Reply</span>
          </label>
        </div>
      </div>

      {/* profile 2 */}

      <div className="flex justify-start px-5">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="https://images.pexels.com/photos/762084/pexels-photo-762084.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <div>
          <h3 className="pl-3 font-semibold">
            Tina Mills
            <span className="pl-3 text-slate-400">3 minutes ago</span>
          </h3>
          <h4 className="pl-3">
            Lorem ipsum dolor sit, consectetur adipiscing elit.
          </h4>
          <label className="pl-4">
            <FontAwesomeIcon className="text-red-600 cursor-pointer" icon={faHeart} />
            <span className="pl-2 text-black">0</span>
            <span className="pl-8 text-slate-600 cursor-pointer">Reply</span>
          </label>
        </div>
      </div>
      {/* footer */}
      <div className="px-5 py-5">
        <h1 className="pt-1 bg-slate-100 w-full h-8 text-center rounded-md cursor-pointer">Show more comments</h1>
      </div>
    </div>
    </div>
  );
}

export default App;
