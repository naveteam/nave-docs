module.exports = {
  mySidebar: [
    { id: 'home', label: 'Início', type: 'doc' },
    {
      Tecnologia: [
        {
          id: 'tecnologia/getting-started',
          label: 'Introdução',
          type: 'doc'
        },
        {
          Guias: ['tecnologia/guides/typescript']
        }
      ],
      'Back-end': [
        {
          Guias: ['back-end/guides/boilerplates']
        }
      ],
      'Front-end': [
        {
          Guias: ['front-end/guides/boilerplates']
        },
        {
          'Casos de uso': [
            {
              Hooks: ['front-end/use-cases/hooks/use-device']
            },
            {
              Helpers: ['front-end/use-cases/helpers/formatCurrency']
            }
          ]
        }
      ],
      Mobile: [
        {
          'Casos de uso': [
            {
              Components: [
                'mobile/use-cases/components/scrolledHeader',
                'mobile/use-cases/components/autocomplete',
                'mobile/use-cases/components/horizontalFlatList',
                'mobile/use-cases/components/modal',
                'mobile/use-cases/components/progressBar',
                'mobile/use-cases/components/snackBar'
              ]
            }
          ]
        },
        {
          Guias: [
            'mobile/guides/webviewDebugging',
            'mobile/guides/pushNotificationSNS'
          ]
        }
      ],
      Infraestrutura: [
        {
          Guias: [
            'infra/guides/dominios',
            {
              Boilerplates: [
                'infra/guides/boilerplates/getting-started',
                {
                  CI: [
                    'infra/guides/boilerplates/pm2',
                    'infra/guides/boilerplates/s3',
                    'infra/guides/boilerplates/ecs'
                  ]
                }
              ],
              Nginx: [
                'infra/use-cases/nginx/default-config',
                'infra/use-cases/nginx/https',
                'infra/use-cases/nginx/headers'
              ]
            }
          ],
          'Casos de uso': [
            {
              Helpers: ['infra/use-cases/helpers/base64Decoder']
            }
          ]
        }
      ]
    }
  ]
}
