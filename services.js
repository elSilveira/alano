const serviceCategories = [
  {
    title: 'Segurança do Trabalho', icon: 'shield',
    description: 'Gestão de segurança, prevenção de riscos, acompanhamento de campo e apoio à CIPA.',
    groups: [
      { title: 'Gestão e prevenção', items: ['Gestão de Segurança do Trabalho', 'Gestão de Saúde Ocupacional', 'Inspeções de segurança', 'Rondas e acompanhamento de campo', 'Levantamento de perigos e avaliação de riscos', 'Elaboração de APR – Análise Preliminar de Riscos', 'Elaboração de PT – Permissão de Trabalho', 'DDS – Diálogo Diário de Segurança', 'Investigação e análise de acidentes e incidentes', 'Planos de ação e acompanhamento de medidas corretivas', 'Gestão de documentos e indicadores de SSMAQ'] },
      { title: 'CIPA e gestão de segurança', items: ['Implantação e acompanhamento da CIPA', 'Apoio às eleições e documentação', 'Treinamento da CIPA', 'Reuniões e registros', 'SIPAT', 'Campanhas de segurança', 'DDS', 'Inspeções', 'Planos de ação', 'Acompanhamento das medidas corretivas'] }
    ]
  },
  {
    title: 'SSMAQ e Sistemas de Gestão', icon: 'chart',
    description: 'Consultoria integrada em Segurança, Saúde, Meio Ambiente e Qualidade, com foco em processos e sistemas de gestão.',
    groups: [
      { title: 'Consultoria e assessoria em SSMAQ', items: ['Gestão de Segurança do Trabalho', 'Gestão de Saúde Ocupacional', 'Gestão Ambiental', 'Gestão da Qualidade', 'Implantação e acompanhamento de sistemas de gestão', 'Auditorias internas e acompanhamento de auditorias externas', 'Inspeções de segurança', 'Rondas e acompanhamento de campo', 'Levantamento de perigos e avaliação de riscos', 'Elaboração de APR – Análise Preliminar de Riscos', 'Elaboração de PT – Permissão de Trabalho', 'DDS – Diálogo Diário de Segurança', 'Investigação e análise de acidentes e incidentes', 'Planos de ação e acompanhamento de medidas corretivas', 'Gestão de documentos e indicadores de SSMAQ'] },
      { title: 'ISO e Sistemas de Gestão', items: ['ISO 9001 – Gestão da Qualidade', 'ISO 14001 – Gestão Ambiental', 'ISO 45001 – Segurança e Saúde Ocupacional', 'Implantação de sistemas de gestão', 'Adequação de processos', 'Procedimentos e controles', 'Auditorias internas', 'Preparação para auditorias de certificação', 'Tratamento de não conformidades', 'Planos de ação', 'Gestão de indicadores'] },
      { title: 'Gestão da Qualidade', items: ['Implantação de sistemas de gestão da qualidade', 'ISO 9001', 'Procedimentos', 'Instruções de trabalho', 'Controle de documentos', 'Indicadores', 'Não conformidades', 'Ações corretivas', 'Auditorias internas', 'Preparação para auditorias externas', 'Melhoria de processos'] },
      { title: 'Consultoria empresarial em SSMAQ', items: ['Diagnóstico de conformidade', 'Levantamento de requisitos legais', 'Adequação de empresas às NRs', 'Organização documental', 'Implantação de rotinas de SSMAQ', 'Treinamento de equipes', 'Acompanhamento de campo', 'Auditorias', 'Gestão de planos de ação', 'Suporte técnico contínuo'] }
    ]
  },
  {
    title: 'Normas Regulamentadoras e Treinamentos', icon: 'book',
    description: 'Consultoria, implantação, adequação e treinamentos relacionados às NRs, dentre outras normas aplicáveis.',
    note: 'Dentre outras Normas Regulamentadoras, conforme as atividades e necessidades de cada empresa.',
    groups: [
      { title: 'Normas Regulamentadoras – NRs', introduction: 'Consultoria, implantação, adequação e treinamentos relacionados às Normas Regulamentadoras, incluindo:', items: ['NR-01 – Gerenciamento de Riscos Ocupacionais', 'NR-06 – Equipamentos de Proteção Individual', 'NR-11 – Transporte, Movimentação, Armazenagem e Manuseio de Materiais', 'NR-12 – Segurança em Máquinas e Equipamentos', 'NR-18 – Segurança e Saúde na Construção', 'NR-20 – Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis', 'NR-34 – Segurança e Saúde no Trabalho a Bordo de Embarcações', 'NR-35 – Trabalho em Altura', 'Avaliação de riscos psicossociais conforme NR-01', 'Ordens de Serviço de Segurança', 'Procedimentos e instruções de segurança', 'Fichas e controles de entrega de EPI'] },
      { title: 'Treinamentos de Segurança do Trabalho', items: ['NR-06 – EPI', 'NR-11 – Movimentação de materiais', 'NR-12 – Máquinas e equipamentos', 'NR-18 – Construção', 'NR-20 – Inflamáveis e combustíveis', 'NR-34 – Trabalho a bordo e atividades navais', 'NR-35 – Trabalho em altura', 'DDS personalizados', 'Treinamentos de integração', 'Reciclagens', 'Treinamentos presenciais e conforme a modalidade aplicável', 'Emissão de certificados'] }
    ]
  },
  {
    title: 'SASSMAQ e Transporte de Produtos Perigosos', icon: 'truck',
    description: 'Diagnóstico, adequação de processos e gestão de riscos para operações de transporte de produtos perigosos.',
    groups: [
      { title: 'SASSMAQ', items: ['Consultoria para implantação e adequação ao SASSMAQ', 'Preparação para auditorias', 'Diagnóstico de conformidade', 'Organização documental', 'Adequação de processos', 'Treinamentos', 'Acompanhamento de auditorias', 'Tratamento de não conformidades', 'Planos de ação'] },
      { title: 'Transporte de Produtos Perigosos', items: ['Consultoria em segurança no transporte de produtos perigosos', 'Gestão de riscos no transporte', 'Procedimentos operacionais', 'APR', 'PAE', 'Treinamentos', 'Inspeções', 'Auditorias', 'Adequação ao SASSMAQ', 'Apoio documental', 'Gestão de requisitos legais', 'Acompanhamento de operações'] }
    ]
  },
  {
    title: 'Meio Ambiente e Licenciamento', icon: 'leaf',
    description: 'Licenciamento e regularização ambiental, gestão de resíduos e avaliação de aspectos e impactos ambientais.',
    groups: [
      { title: 'Meio Ambiente e Licenciamento Ambiental', items: ['Licenciamento ambiental', 'Regularização ambiental', 'Licenças ambientais', 'Estudos e documentos ambientais', 'LAS – Licenciamento Ambiental Simplificado', 'RAS – Relatório Ambiental Simplificado', 'PGRS – Plano de Gerenciamento de Resíduos Sólidos', 'PAE – Plano de Atendimento a Emergências', 'Gestão de resíduos', 'Avaliação de aspectos e impactos ambientais', 'Adequação ambiental de empresas e empreendimentos', 'Apoio em processos junto aos órgãos ambientais'] }
    ]
  },
  {
    title: 'Emergências, Incêndio e PAE', icon: 'alert',
    description: 'Planos de atendimento a emergências, simulados, brigadas e apoio à prevenção e combate a incêndios.',
    groups: [
      { title: 'Emergências e Prevenção de Incêndios', items: ['PAE – Plano de Atendimento a Emergências', 'Planos de emergência', 'Simulados de emergência', 'Treinamentos para situações de emergência', 'Organização de brigadas', 'Procedimentos de resposta a emergências', 'Integração com bombeiros, polícia e demais órgãos de resposta', 'Apoio em documentação de prevenção e combate a incêndios', 'SPCI – Sistemas de Prevenção e Combate a Incêndio', 'SPDA – Sistemas de Proteção contra Descargas Atmosféricas'] }
    ]
  },
  {
    title: 'Laudos, Avaliações e Documentação Técnica', icon: 'document',
    description: 'PGR, PCMSO, laudos, avaliações, relatórios e organização de documentos para auditorias e fiscalizações.',
    groups: [
      { title: 'PGR, PCMSO e documentação de SST', items: ['PGR – Programa de Gerenciamento de Riscos', 'Inventário de Riscos Ocupacionais', 'Plano de Ação', 'PCMSO – Programa de Controle Médico de Saúde Ocupacional', 'Ordens de Serviço', 'APRs', 'Permissões de Trabalho', 'Procedimentos operacionais', 'Laudos e avaliações de segurança', 'Documentação para fiscalização e auditorias', 'Organização e gestão de documentos de SST'] },
      { title: 'Laudos, avaliações e documentos técnicos', items: ['Laudos de segurança', 'Avaliações de riscos ocupacionais', 'Avaliações ambientais', 'Avaliações de máquinas e equipamentos', 'Relatórios técnicos', 'APR', 'PGR', 'PAE', 'PGRS', 'Ordens de Serviço', 'Procedimentos de segurança', 'Documentos para auditorias e fiscalizações'] }
    ]
  },
  {
    title: 'Cursos de Trânsito 100% Online', icon: 'screen',
    description: 'Capacitação e atualização para condutores de transporte especializado, com a flexibilidade do ensino online.',
    note: 'Cursos de trânsito 100% online, com certificação e homologação/averbação junto ao órgão de trânsito, conforme o curso.',
    groups: [
      { title: 'Cursos de Trânsito', items: ['MOPP – Movimentação de Produtos Perigosos', 'Transporte Escolar', 'Transporte Coletivo de Passageiros', 'Transporte de Emergência', 'Transporte de Cargas Indivisíveis', 'Cursos e atualizações relacionados ao transporte especializado'] }
    ]
  }
];
