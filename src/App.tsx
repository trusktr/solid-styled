import {NavLink, Router} from 'solid-app-router'
import {Routes} from './Routes'
import {StyleRegistry} from 'solid-styled'

// import {Suspense} from 'solid-js'

// Without this, TS complains about `<style jsx>`
// import type {} from 'solid-styled-jsx'

export function App() {
	return (
		<>
			<StyleRegistry>
				{/* TODO Suspense broke and doesn't show loaded state, although we're fine without it. */}
				{/* <Suspense fallback={<h1>Loading...</h1>}> */}
				<Router>
					<div id="nav">
						<NavLink href="/home">Home</NavLink> | <NavLink href="/command">Command</NavLink> |{' '}
						<NavLink href="/configTable">Config Tables</NavLink>
						{/*| <NavLink href="/mapdemo">Map Demo</NavLink> */}
					</div>

					<div id="routes">
						<Routes />
					</div>

					<style global>{
						/*css*/ `
							html,
							body,
							#app {
								width: 100%;
								height: 100%;
								margin: 0;
							}

							#app {
								font-family: Roboto, Helvetica, Arial, sans-serif;
								-webkit-font-smoothing: antialiased;
								-moz-osx-font-smoothing: grayscale;
								color: #2c3e50;

								display: flex;
								flex-direction: column;
							}

							#nav {
								background-color: #d3d3d3;
								width: 100%;
								line-height: 1.6;
								text-align: center;
								margin-bottom: 6px;
							}

							#nav a {
								font-weight: 700;
								color: #2c3e50;
							}

							#nav a.active {
								color: #3db2da;
							}

							#routes {
								flex-grow: 1;
							}

							body {
								font-family: Roboto;
								font-weight: 400;
								width: 100%;
								margin: 0;
								font-size: 1.6rem;
								background-color: lightslategrey;
							}
						`
					}</style>
				</Router>
				{/* </Suspense> */}
			</StyleRegistry>
		</>
	)
}
