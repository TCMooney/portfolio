import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignOutAlt, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Icons = () => {
  return library.add(faSignOutAlt, faEnvelope, faPhone, faMapMarkerAlt);
}

export default Icons;