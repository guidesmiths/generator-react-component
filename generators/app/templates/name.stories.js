import React from 'react';
import StoryRouter from 'storybook-router';
import { storiesOf } from '@storybook/react';
import <%= nameUp %> from './<%= name %>.component.js';
import data from './mock-data.json';

import { Provider } from 'react-redux';

import configureStore from '../../../configureStore';

const store = configureStore();

storiesOf( <%= nameUp %>, module)
	.addDecorator(StoryRouter())
	.addDecorator((render) => (
		<Provider store={store}>
			{render()}
		</Provider>
	))
	.add('<%= nameUp %> default', () => (
		<div className="flex-container" style={{background: '#f2f2f2', padding: '50px'}}>
			<<%= nameUp %> data={data} />
		</div>
	));