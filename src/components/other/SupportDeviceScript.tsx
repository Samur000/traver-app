'use client';

import { usePathname, useRouter } from 'next/navigation';

import { useMediaQuery } from '@mui/material';

import { useAppError } from '@/lib/hooks/useAppError';
import { BREAKPOINTS } from '@/lib/styles/style';

export const SupportDeviceScript = () => {
	const router = useRouter();
	const pathname = usePathname();

	const appError = useAppError();

	const isTouchDevice = useMediaQuery('(pointer: coarse)', {
		defaultMatches: true
	});

	const isSupportWidth = useMediaQuery(
		`(max-width:${BREAKPOINTS.maxSupport}px)`,
		{ defaultMatches: true }
	);

	// useEffect(() => {
	// 	if (!isTouchDevice) {
	// 		appError('Поддерживаются только сенсорные устройства');
	// 	} else if (!isSupportWidth) {
	// 		appError('Текущее разрешение не поддерживается');
	// 	} else if (pathname === ROUTES.error) {
	// 		router.replace(ROUTES.home);
	// 	}
	// }, [isTouchDevice, isSupportWidth]);

	return <></>;
};
