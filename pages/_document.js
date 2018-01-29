import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<html lang="en">
				<Head>
					<title>
						Andrés Artavia
					</title>
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>

                <style jsx global>{`
					body {
                        margin: 0;
                        background-color: #F8F8F8;
                        overflow: hidden;
					}
				`}</style>
			</html>
		);
	}
}