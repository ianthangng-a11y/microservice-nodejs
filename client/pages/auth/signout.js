import {useRequest} from "../../hooks/use-request";
import {useRouter} from "next/router";
import {useEffect} from "react";

const SignOut = () => {
	const router = useRouter();
	const { doRequest } = useRequest(
		{
			url: '/api/users/signout',
			method: 'post',
			body: {},
			onSuccess: () => router.push('/'),
		}
	);

	useEffect(() => {
		void doRequest();
	}, []);
	return <h1>You're sign out</h1>;
}

export default SignOut;