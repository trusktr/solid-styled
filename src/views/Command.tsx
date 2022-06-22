export function CommandView() {
	return (
		<div id="command">
			<header>
				<h1>yooooooooooo</h1>
			</header>
			<main id="command">woo hooooooo</main>

			<style jsx>{
				/*css*/ `
					#command {
						width: 100%;
						height: 100%;
						display: flex;
						flex-direction: column;
					}

					header h1 {
						margin: 0;
						text-align: center;
					}

					main {
						flex: 1;
						display: flex;
						flex-direction: column;
					}
					main .top {
						height: 200px;
					}
					main .bottom {
						flex: 1;
					}
				`
			}</style>
		</div>
	)
}
