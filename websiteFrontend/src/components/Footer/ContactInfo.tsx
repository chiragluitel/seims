import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactInfo = () => {
    return (
        <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">Contact Info</h4>
            <div className="space-y-3">
                <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-green-400 mt-1 flex-shrink-0" />
                    <div>
                        <p className="text-gray-300">123 Main Street</p>
                        <p className="text-gray-300">Kathmandu, Nepal</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <FaPhone className="text-green-400 flex-shrink-0" />
                    <a 
                        href="tel:+9771234567890" 
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                        +977 123 456 7890
                    </a>
                </div>
                <div className="flex items-center gap-3">
                    <FaEnvelope className="text-green-400 flex-shrink-0" />
                    <a 
                        href="mailto:info@seims.com" 
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                        info@seims.com
                    </a>
                </div>
                <div className="flex items-center gap-3">
                    <FaClock className="text-green-400 flex-shrink-0" />
                    <div>
                        <p className="text-gray-300">Mon-Sat: 8:00 AM - 8:00 PM</p>
                        <p className="text-gray-300">Sun: 9:00 AM - 6:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;
