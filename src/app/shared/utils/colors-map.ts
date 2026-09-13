import { Colors } from '../interface/colors';

interface ColorVariant {
  bg: string;
  text: string;
  border: string;
}

interface ColorMap {
  one: ColorVariant;
  two: ColorVariant;
}

export const SHADES: Record<Colors, ColorMap> = {
  red: {
    one: {
      bg: 'bg-red-one-c',
      text: 'text-red-one-c',
      border: 'border-red-one-c'
    },
    two: {
      bg: 'bg-red-two-c',
      text: 'text-red-two-c',
      border: 'border-red-two-c'
    }
  },

  blue: {
    one: {
      bg: 'bg-blue-one-c',
      text: 'text-blue-one-c',
      border: 'border-blue-one-c'
    },
    two: {
      bg: 'bg-blue-two-c',
      text: 'text-blue-two-c',
      border: 'border-blue-two-c'
    }
  },

  green: {
    one: {
      bg: 'bg-green-one-c',
      text: 'text-green-one-c',
      border: 'border-green-one-c'
    },
    two: {
      bg: 'bg-green-two-c',
      text: 'text-green-two-c',
      border: 'border-green-two-c'
    }
  },

  pink: {
    one: {
      bg: 'bg-pink-one-c',
      text: 'text-pink-one-c',
      border: 'border-pink-one-c'
    },
    two: {
      bg: 'bg-pink-two-c',
      text: 'text-pink-two-c',
      border: 'border-pink-two-c'
    }
  },

  violet: {
    one: {
      bg: 'bg-violet-one-c',
      text: 'text-violet-one-c',
      border: 'border-violet-one-c'
    },
    two: {
      bg: 'bg-violet-two-c',
      text: 'text-violet-two-c',
      border: 'border-violet-two-c'
    }
  },

  yellow: {
    one: {
      bg: 'bg-yellow-one-c',
      text: 'text-yellow-one-c',
      border: 'border-yellow-one-c'
    },
    two: {
      bg: 'bg-yellow-two-c',
      text: 'text-yellow-two-c',
      border: 'border-yellow-two-c'
    }
  },

  turquoise: {
    one: {
      bg: 'bg-turquoise-one-c',
      text: 'text-turquoise-one-c',
      border: 'border-turquoise-one-c'
    },
    two: {
      bg: 'bg-turquoise-two-c',
      text: 'text-turquoise-two-c',
      border: 'border-turquoise-two-c'
    }
  },

  orange: {
    one: {
      bg: 'bg-orange-one-c',
      text: 'text-orange-one-c',
      border: 'border-orange-one-c'
    },
    two: {
      bg: 'bg-orange-two-c',
      text: 'text-orange-two-c',
      border: 'border-orange-two-c'
    }
  },

  grey: {
    one: {
      bg: 'bg-grey-one-c',
      text: 'text-grey-one-c',
      border: 'border-grey-one-c'
    },
    two: {
      bg: 'bg-grey-two-c',
      text: 'text-grey-two-c',
      border: 'border-grey-two-c'
    }
  },

  white: {
    one: {
      bg: 'bg-background-c',
      text: 'text-background-c',
      border: 'border-background-c'
    },
    two: {
      bg: 'bg-grey-one-c',
      text: 'text-grey-one-c',
      border: 'border-grey-one-c'
    }
  },
};


export function getColorShades(color: Colors): ColorMap {
  return SHADES[color];
}
