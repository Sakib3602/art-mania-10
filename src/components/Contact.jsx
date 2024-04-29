import gif from "./gif.json"
import Lottie from "lottie-react";
const Contact = () => {
    return (
        <div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 border-[3px] border-black border-solid mt-10 text-gray-100">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl text-black">Let's talk!</h2>
			<div className="text-black">Vivamus in nisl metus? Phasellus.</div>
		</div>

        <div>
        <Lottie animationData={gif}></Lottie>

        </div>
		
	</div>
	<form noValidate="" className="space-y-6">
		<div>
			<label htmlFor="name" className="text-sm text-black">Full name</label>
			<input id="name" type="text" placeholder="Your Name" className="w-full p-3 rounded border-[3px] border-black border-solid" />
		</div>
		<div>
			<label htmlFor="email"  className="text-sm text-black">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded border-[3px] border-black border-solid" placeholder="Your Email" />
		</div>
		<div>
			<label htmlFor="message" className="text-sm text-black">Message</label>
			<textarea placeholder="Your Message" id="message" rows="3" className="w-full p-3 rounded border-[3px] border-black border-solid"></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900">Send Message</button>
	</form>
</div>
        </div>
    );
};

export default Contact;