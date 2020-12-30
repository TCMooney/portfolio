import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignOutAlt, faEnvelope, faPhone, faMapMarkerAlt, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

const Icons = () => {
  return library.add(faSignOutAlt, faEnvelope, faPhone, faMapMarkerAlt, faCodeBranch);
}

export default Icons;