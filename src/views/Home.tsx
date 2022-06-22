export function Home() {
	return (
		<div id="home">
			<div id="home-top">
				<div>hello</div>
				<div id="home-top-right">hai</div>
			</div>

			<div id="home-bottom">yoo hoo</div>

			<style jsx>{
				/*css*/ `
					#home {
						width: 100%;
						height: 100%;
						display: flex;
						flex-direction: column;
					}

					#home-top {
						flex-grow: 1;
						display: flex;
						contain: size layout paint;
						contain: strict;
					}

					#home-top > * {
						width: 50%;
						height: 100%;
						margin-right: 6px;
						contain: size layout paint;
						contain: strict;
					}

					#home-top > :last-child {
						margin-right: 0;
					}

					#home-top-right {
						display: flex;
						flex-direction: column;
					}

					#home-top-right > * {
						margin-bottom: 6px;
						height: 50%;
						width: 100%;
						contain: size layout paint;
						contain: strict;
					}

					#home-top-right > :last-child {
						margin-bottom: 0;
					}

					#home-bottom {
						margin-top: 6px;
						height: 55px;
						width: 100%;
						contain: size layout;
					}
				`
			}</style>
		</div>
	)
}
