Meteor.startup(function() {
	RocketChat.settings.addGroup('SlackBridge', function() {
		this.add('SlackBridge_Enabled', false, {
			type: 'boolean',
			i18nLabel: 'Enabled',
			public: true
		});

		this.add('SlackBridge_Client_ID', '', {
			type: 'string',
			enableQuery: {
				_id: 'SlackBridge_Enabled',
				value: true
			},
			i18nLabel: 'Client_ID',
			public: true
		});

		this.add('SlackBridge_Client_Secret', '', {
			type: 'string',
			enableQuery: {
				_id: 'SlackBridge_Enabled',
				value: true
			},
			i18nLabel: 'Client_Secret',
			public: true
		});

		this.add('SlackBridge_OAuth_Scopes', 'bot,chat:write:bot,chat:write:user,files:read,files:write:user,stars:read,stars:write', {
			type: 'string',
			enableQuery: {
				_id: 'SlackBridge_Enabled',
				value: true
			},
			i18nLabel: 'SlackBridge_OAuth_Scopes',
			public: true
		});

		this.add('SlackBridge_OAuth_Redirect_Url', '', {
			type: 'string',
			enableQuery: {
				_id: 'SlackBridge_Enabled',
				value: true
			},
			i18nLabel: 'SlackBridge_OAuth_Redirect_Url',
			i18nDescription: 'SlackBridge_OAuth_Redirect_Url_Description',
			public: true
		});

		this.add('SlackBridge_APIToken', '', {
			type: 'string',
			enableQuery: {
				_id: 'SlackBridge_Enabled',
				value: true
			},
			i18nLabel: 'API_Token'
		});

		this.add('SlackBridge_Event_API_Enabled', false, {
			type: 'boolean',
			enableQuery: {
				_id: 'SlackBridge_Enabled',
				value: true
			},
			i18nLabel: 'Event_API_Enabled',
			public: true
		});

		this.add('SlackBridge_Verification_Token', '', {
			type: 'string',
			enableQuery: [{
				_id: 'SlackBridge_Enabled',
				value: true
			}, {
				_id: 'SlackBridge_Event_API_Enabled',
				value: true
			}],
			i18nLabel: 'Verification_Token',
			i18nDescription: 'Verification_Token_Description',
			public: true
		});

		this.add('SlackBridge_AliasFormat', '', {
			type: 'string',
			enableQuery: {
				_id: 'SlackBridge_Enabled',
				value: true
			},
			i18nLabel: 'Alias_Format',
			i18nDescription: 'Alias_Format_Description'
		});

		this.add('SlackBridge_ExcludeBotnames', '', {
			type: 'string',
			enableQuery: {
				_id: 'SlackBridge_Enabled',
				value: true
			},
			i18nLabel: 'Exclude_Botnames',
			i18nDescription: 'Exclude_Botnames_Description'
		});

		this.add('SlackBridge_Out_Enabled', false, {
			type: 'boolean',
			enableQuery: {
				_id: 'SlackBridge_Enabled',
				value: true
			}
		});

		this.add('SlackBridge_Out_All', false, {
			type: 'boolean',
			enableQuery: [{
				_id: 'SlackBridge_Enabled',
				value: true
			}, {
				_id: 'SlackBridge_Out_Enabled',
				value: true
			}]
		});

		this.add('SlackBridge_Out_Channels', '', {
			type: 'roomPick',
			enableQuery: [{
				_id: 'SlackBridge_Enabled',
				value: true
			}, {
				_id: 'SlackBridge_Out_Enabled',
				value: true
			}, {
				_id: 'SlackBridge_Out_All',
				value: false
			}]
		});
	});
});
