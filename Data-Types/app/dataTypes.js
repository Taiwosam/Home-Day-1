//This function performs different operations depending on the type of value passed to it

function dataTypes(data) {
  var typeOfData = typeof(data);

  if (data === null || data === undefined) {
    return 'no value';
  }

  if (typeOfData === 'string') {
    return data.length;
  }

  else if (typeOfData === 'boolean') {
    return data;
  }

  else if (typeOfData === 'number') {
    if (data > 100) {
      return 'more than 100';
    }

    else if (data < 100) {
      return 'less than 100';
    }

    else {
      return 'equal to 100';
    }
  }

  else if (data instanceof Array) {
    return data[2];
  }

  else if (typeOfData === 'function') {
    data(true);
    return 'called callback';
  }

  else if (typeOfData === 'object') {
    var listOfKeys = [];
    for (var i in data) {
      listOfKeys.push(i);
    }

    return listOfKeys;
  }
}

module.exports = dataTypes;
