module.exports = {
	block: 'page',
	title: 'mpss',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'index.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'index.min.js' }],
	mix: {
		block: 'theme',
		mods: { color: 'gpn-default', control: 'gpn-default', space: 'default', breakpoint: 'default', space: 'default', size: 'gpn-default', gap: 'medium', font: 'gpn-default' }
	},
	content: [
		{
			block: 'header'
		},
		{
			block: 'tpl-layout',
			mods: { structure: 'mpss' },
			mix: { block: 'main-page', mods: { models: true }, },
			content: [


				{
					tag: 'section',
					elem: 'section',
					mix: { block: 'decorator', mods: { 'space-l': '2xl', 'space-r': 'xl' }},
					content: {
						elem: 'container',
						elemMods: { size: 'xs' },
						content: [
							{
								tag: 'h2',
								block: 'text',
								mods: { size: 's', view: 'secondary', transform: 'uppercase', spacing: 'xs' },
								mix: { block: 'decorator', mods: { 'indent-t': '2xl', 'indent-b': 'm' }},
								content: 'Центральные происшествия'
							},
							{
								block: 'central-event',
								mix: { block: 'pt-card' },
								content: [
									{
										elem: 'content',
										mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-t': 'l', 'space-h': 'xl', 'space-b': '2xl' }, },
										content: {
											block: 'text',
											mods: { size: 'xl', view: 'primary', 'line-height': 'm' },
											mix: { block: 'central-event', elem: 'title' },
											content: 'Общеприменимые сценарии'
										},
									},
									{
										elem: 'footer',
										mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'right' }, },
										content: {
											block: 'text',
											mods: { size: 'xl', view: 'ghost' },
											content: '9'
										},
									},
								]
							},
							{
								block: 'central-event',
								// mods: { state: 'active' },
								mix: { block: 'pt-card' },
								content: [
									{
										elem: 'content',
										mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-t': 'l', 'space-h': 'xl', 'space-b': '2xl' }, },
										content: {
											block: 'text',
											mods: { size: 'xl', view: 'primary', 'line-height': 'm' },
											mix: { block: 'central-event', elem: 'title' },
											content: 'Блоковые сценарии'
										},
									},
									{
										elem: 'footer',
										mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'right' }, },
										content: {
											block: 'text',
											mods: { size: 'xl', view: 'ghost' },
											content: '6'
										},
									},
								]
							},
							{
								block: 'central-event',
								mix: { block: 'pt-card' },
								content: [
									{
										elem: 'content',
										mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-t': 'l', 'space-h': 'xl', 'space-b': '2xl' }, },
										content: {
											block: 'text',
											mods: { size: 'xl', view: 'primary', 'line-height': 'm' },
											mix: { block: 'central-event', elem: 'title' },
											content: 'Техногенная безопасность'
										},
									},
									{
										elem: 'footer',
										mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'right' }, },
										content: {
											block: 'text',
											mods: { size: 'xl', view: 'ghost' },
											content: '16'
										},
									},
								]
							},
						]
					}
				},


				{
					elem: 'section',
					mix: [
						{ block: 'decorator', mods: { 'space-h': 'xl' }},
						{ block: 'main-page', elem: 'cluster-events', elemMods: { state: 'closed' }, }
					],
					content: {
						elem: 'container',
						elemMods: { size: 'xs' },
						content: [
							{
								tag: 'h2',
								block: 'text',
								mods: { size: 's', view: 'secondary', transform: 'uppercase', spacing: 'xs' },
								mix: { block: 'decorator', mods: { 'indent-t': '2xl', 'indent-b': 'm', 'space-l': 's' }},
								content: 'Кластерные происшествия'
							},
							{
								block: 'pt-list',
								mods: { 'space-a': 's', 'vertical-align': 'baseline', distribute: 'between' },
								content: [
									{
										elem: 'item',
										mix: { block: 'cluster-event' },
										content: [
											{
												block: 'text',
												mods: { size: 'l', view: 'primary' },
												mix: { block: 'cluster-event', elem: 'title' },
												content: 'Пожарная безопасность'
											},
											{
												block: 'text',
												mods: { size: 'm', view: 'ghost' },
												content: '2'
											},
										]
									},
									{
										elem: 'item',
										mix: { block: 'cluster-event' },
										content: [
											{
												block: 'text',
												mods: { size: 'l', view: 'primary' },
												mix: { block: 'cluster-event', elem: 'title' },
												content: 'Пожарная безопасность'
											},
											{
												block: 'text',
												mods: { size: 'm', view: 'ghost' },
												content: '2'
											},
										]
									},
									{
										elem: 'item',
										mix: { block: 'cluster-event' },
										content: [
											{
												block: 'text',
												mods: { size: 'l', view: 'primary' },
												mix: { block: 'cluster-event', elem: 'title' },
												content: 'Сложный технологический объект'
											},
											{
												block: 'text',
												mods: { size: 'm', view: 'ghost' },
												content: '3'
											},
										]
									},
									{
										elem: 'item',
										mix: { block: 'cluster-event' },
										content: [
											{
												block: 'text',
												mods: { size: 'l', view: 'primary' },
												mix: { block: 'cluster-event', elem: 'title' },
												content: 'Сероводород'
											},
											{
												block: 'text',
												mods: { size: 'm', view: 'ghost' },
												content: '2'
											},
										]
									},
									{
										elem: 'item',
										mix: { block: 'cluster-event' },
										content: [
											{
												block: 'text',
												mods: { size: 'l', view: 'primary' },
												mix: { block: 'cluster-event', elem: 'title' },
												content: 'Разливы нефтепродуктов'
											},
											{
												block: 'text',
												mods: { size: 'm', view: 'ghost' },
												content: '2'
											},
										]
									},
									{
										elem: 'item',
										mix: { block: 'cluster-event' },
										content: [
											{
												block: 'text',
												mods: { size: 'l', view: 'primary' },
												mix: { block: 'cluster-event', elem: 'title' },
												content: 'Авария на платформе'
											},
											{
												block: 'text',
												mods: { size: 'm', view: 'ghost' },
												content: '3'
											},
										]
									},
								]
							},
						]
					}
				},


				{
					elem: 'section',
					mix: [
						{ block: 'decorator', mods: { 'space-l': 'xl', 'space-r': '2xl' }},
						{ block: 'main-page', elem: 'scenario-events', elemMods: { state: 'closed' }, }
					],
					content: {
						elem: 'container',
						elemMods: { size: 'xs', distribute: 'center' },
						content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center', distribute: 'between' },
								mix: { block: 'decorator', mods: { 'indent-t': 'xl', 'indent-b': 's' }},
								content: [
									{
										tag: 'h2',
										block: 'text',
										mods: { size: 's', view: 'secondary', transform: 'uppercase', spacing: 'xs' },
										mix: { block: 'decorator', mods: { 'indent-v': 'none' }},
										content: 'Сценарные происшествия'
									},
									{
										block: 'button',
										mods: { size: 's', view: 'primary' },
										content: '+ Новая модель'
									}
								]
							},
							{
								block: 'loader-container',
								attrs: { style:
									`position: absolute; 
									display: flex;
									align-items: center;
									justify-content: center;
									width: 100%; height: 200px;` },
								content: {
									block: 'loader',
									mods: { size: 'm' },
									content: { elem: 'dot' },
								},
							},
							{
								block: 'scenario-event',
								mix: { block: 'pt-card' },
								content: [
									{
										elem: 'content',
										mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-t': 'l', 'space-h': 'xl', 'space-b': '5xl' }, },
										content: [
											{
												block: 'text',
												mods: { size: 'xs', view: 'secondary' },
												mix: { block: 'decorator', mods: { 'indent-b': '2xs' }},
												content: 'Последнее изменение: 02.09.2019'
											},
											{
												block: 'text',
												mods: { size: 'xl', view: 'primary', 'line-height': 'm' },
												mix: { block: 'scenario-event', elem: 'title' },
												content: 'Пожар/взрыв: разгерметизация насосно-компрессорного оборудования'
											},
										]
									},
									{
										elem: 'footer',
										mix: { block: 'pt-card', elem: 'footer', elemMods: { distribute: 'between', 'space-v': 'm', 'space-h': 'xl' }, },
										content: [
											{
												block: 'cards-tags',
												content: {
													elem: 'tag',
													elemMods: { color: 'normal' },
													content: '44 проекта'
												},
											},
											{ block: 'icon', mods: { name: 'forward', size: 'm', view: 'link' }, mix: { block: 'scenario-event', elem: 'arrow' },},
										]
									},
								]
							},
							{
								block: 'scenario-event',
								mix: { block: 'pt-card' },
								content: [
									{
										elem: 'content',
										mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-t': 'l', 'space-h': 'xl', 'space-b': '5xl' }, },
										content: [
											{
												block: 'text',
												mods: { size: 'xs', view: 'secondary' },
												mix: { block: 'decorator', mods: { 'indent-b': '2xs' }},
												content: 'Последнее изменение: 02.09.2019'
											},
											{
												block: 'text',
												mods: { size: 'xl', view: 'primary', 'line-height': 'm' },
												mix: { block: 'scenario-event', elem: 'title' },
												content: 'Пожар/взрыв: разгерметизация трубопроводов, колонн и печей'
											},
										]
									},
									{
										elem: 'footer',
										mix: { block: 'pt-card', elem: 'footer', elemMods: { distribute: 'between', 'space-v': 'm', 'space-h': 'xl' }, },
										content: [
											{
												block: 'cards-tags',
												content: {
													elem: 'tag',
													elemMods: { color: 'normal' },
													content: 'Вся компания'
												},
											},
											{ block: 'icon', mods: { name: 'forward', size: 'm', view: 'link' }, mix: { block: 'scenario-event', elem: 'arrow' },},
										]
									},
								]
							},
							{
								block: 'scenario-event',
								mix: { block: 'pt-card' },
								content: [
									{
										elem: 'content',
										mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-t': 'l', 'space-h': 'xl', 'space-b': '5xl' }, },
										content: [
											{
												block: 'text',
												mods: { size: 'xs', view: 'secondary' },
												mix: { block: 'decorator', mods: { 'indent-b': '2xs' }},
												content: 'Последнее изменение: 02.09.2019'
											},
											{
												block: 'text',
												mods: { size: 'xl', view: 'primary', 'line-height': 'm' },
												mix: { block: 'scenario-event', elem: 'title' },
												content: 'Пожар/взрыв: на резервуаре с взрывопожароопасными жидкостями'
											},
										]
									},
									{
										elem: 'footer',
										mix: { block: 'pt-card', elem: 'footer', elemMods: { distribute: 'between', 'space-v': 'm', 'space-h': 'xl' }, },
										content: [
											{
												block: 'cards-tags',
												content: {
													elem: 'tag',
													elemMods: { color: 'normal' },
													content: '72 проекта'
												},
											},
											{ block: 'icon', mods: { name: 'forward', size: 'm', view: 'link' }, mix: { block: 'scenario-event', elem: 'arrow' },},
										]
									},
								]
							},
						]
					}
				},
			]
		},
	]
};
