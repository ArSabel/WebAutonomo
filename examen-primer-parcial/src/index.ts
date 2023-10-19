interface IRequest {
    id: number;
    url: string;
    returnType: string;
    format: string;
    status: string;
    parameters: IParameter[];
  }
  
  interface IParameter {
    id: number;
    name: string;
    type: string;
    comment: string;
    requestId: number;
    status: string;
  }
  
  const parameters: IParameter[] = [
    {
      id: 1,
      name: 'WorldWide',
      type: 'pagina web',
      comment: 'sobre el mundo',
      requestId: 1,
      status: 'activo',
    },
    {
      id: 2,
      name: 'Yahoo',
      type: 'buscador',
      comment: 'para buscar información',
      requestId: 1,
      status: 'activo',
    },
  ];
  
  const request: IRequest = {
    id: 1,
    url: 'www.worldwide.com',
    returnType: 'wwwww',
    format: 'html',
    status: 'true',
    parameters: parameters,
  };
  
  function eliminacion(
    parameters: IParameter[],
    id: number,
    callback: (eliminacionparametro: IParameter[]) => void
  ) {
    const eliminacionparametro: IParameter[] = [];
  
    for (let i = 0; i < parameters.length; i++) {
      if (parameters[i].id === id) {
        parameters[i].status = 'eliminado';
        eliminacionparametro.push(parameters[i]);
      }
    }
  
    callback(eliminacionparametro);
  }
  
  eliminacion(request.parameters, 1, (eliminacionparametro) => {
    console.log('Elementos eliminados:', eliminacionparametro);
    console.log('Request actualizado:', request);
  });
  