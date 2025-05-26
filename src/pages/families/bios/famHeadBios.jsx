import { useSearchParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { HashLink } from 'react-router-hash-link';
import AppearingDiv from '../../../../components/ui/AppearingDiv/AppearingDiv';
import { MAX_WIDTH } from './../../../../Constants';

import styles from './famHeadBios.module.css';

export default function FamBios() {
    return(
        <>
            <Helmet><title>Fam Head Bios</title></Helmet>
        </>
    )
}