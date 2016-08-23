const services = Meteor.settings.private.oAuth;

const configure = () => {
  if ( services ) {
    for ( let service in services ) {
      ServicConfiguration.configurations.upsert( { service: service }, { $set: services[ service ]
      });
    }
  }
};

Modules.server.configureServices = configure;
