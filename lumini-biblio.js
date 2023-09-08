class Biblio {
    constructor() {
        this.index = -1;
        this.desafios = [];

        desafios19ago2023.forEach(d => {
            var s = d.situacao;
            if (this.consegueTransformar(d, '*BCDE*GHIJK*MNOPQR*#STUVW#*abcdef*ghijk*nopq')) {
            } else if (this.consegueTransformar(d, '*ABCD*@GHIJ*@MNOPQ*@@STUVW*@abcde*@ghij*mnop')) {
            } else if (this.consegueTransformar(d, '*CDEF*HIJK@*NOPQR@*STUVW@@*bcdef@*hijk@*opqr')) {
            } else if (this.consegueTransformar(d, '*@@@@*@@@@@*ABCDEF*@GHIJK@*MNOPQR*STUVW*bcde')) {
            } else if (this.consegueTransformar(d, '*NOPQ*STUVW*abcdef*@ghijk@*mnopqr*@@@@@*@@@@')) {
            } else {
            }
        });
    }
    getFirst() {
        this.index = 0;
        var d = this.desafios[this.index];
        return { situacao: d.situacao, solucao: d.solucao };
    }
    getLast() {
        this.index = this.desafios.length - 1;
        var d = this.desafios[this.index];
        return { situacao: d.situacao, solucao: d.solucao };
    }
    getNext() {
        if (this.index < this.desafios.length - 1) {
            var d = this.desafios[++this.index];
            return { situacao: d.situacao, solucao: d.solucao };
        }
    }
    getPrev() {
        if (this.index > 0) {
            var d = this.desafios[--this.index];
            return { situacao: d.situacao, solucao: d.solucao };
        }
    }
    consegueTransformar(d, from) {
        var s = this.transformMap(d.situacao, from, '*PWch*JQXdi*EKRYej*AFLSZfk*BGMTag*CHNUb*DIOV*');
        if (s.length == 8) {
            var solucao = this.transformMap(d.solucao,
                'ABCDEFGH -123456',
                'ABCDEFGH -123450'
            );
            this.desafios.push({ situacao: s, solucao: solucao });
            return true;
        }
        return false;
    }

    transformMap(info, from, to) {
        return info.split('').map(x => to.charAt(from.indexOf(x))).join('');
    }

}

var desafios19ago2023 =
    [
        {
            "situacao": "BhFWGKIO",
            "solucao": "A-2 G-2 E-2 G-4 A-4 F-5 A-2 G-1 B-1 C-4"
        },
        {
            "situacao": "CgEIKjUe",
            "nivel": 0,
            "solucaoCasas": "jdQ-IJ-CD-gI-UP-eV",
            "solucao": "B-1 F-61 C-4 D-2 H-6 A-3"
        },
        {
            "situacao": "DTPcVobd",
            "nivel": 0,
            "solucaoCasas": "DO-cU-dc-od",
            "solucao": "D-1 H-5 F-1 A-4"
        },
        {
            "situacao": "JNMhOmdi",
            "nivel": 0,
            "solucaoCasas": "Nc-JU-mT-Mb",
            "solucao": "B-3 F-1 C-3 A-4"
        },
        {
            "situacao": "EKOTRdgp",
            "nivel": 0,
            "solucaoCasas": "gb-pc-KVU-EP-RQV-V",
            "solucao": "H-6 G-1 B-4 E-54 A-4"
        },
        {
            "situacao": "OUPWThjn",
            "nivel": 0,
            "solucaoCasas": "hc-WV-nhi-jd",
            "solucao": "D-5 F-1 H-12 G-6"
        },
        {
            "situacao": "DfTcbghk",
            "nivel": 0,
            "solucaoCasas": "ki-fd-DOU-U",
            "solucao": "A-4 B-5 H-5 A-3"
        },
        {
            "situacao": "BEHORVch",
            "nivel": 0,
            "solucaoCasas": "BD-RK-VQ-cJ-hP-HI",
            "solucao": "A-2 G-1 E-6 F-1 H-1 C-2"
        },
        {
            "situacao": "EJRUWjcd",
            "nivel": 1,
            "solucaoCasas": "je-UPQ-JU-EP-UV-cU",
            "solucao": "C-6 F-1 C-4 B-3 A-4"
        },
        {
            "situacao": "BTJfUjVi",
            "nivel": 1,
            "solucaoCasas": "Ude-Vd-fQV-Tc-BU-JP",
            "solucao": "H-6 D-6 E-1 F-6 H-1 F-2 A-3"
        },
        {
            "situacao": "CJFNIbde",
            "nivel": 1,
            "solucaoCasas": "IT-FDO-bc-CVU-JP-eV",
            "solucao": "E-4 C-45 F-2 A-3 B-4 D-2"
        },
        {
            "situacao": "CSFPGHUb",
            "nivel": 1,
            "solucaoCasas": "FD-CITNO-SN-bT-DI",
            "solucao": "C-5 F-3 C-4 H-1 A-4 E-2"
        },
        {
            "situacao": "BJDWKUST",
            "nivel": 1,
            "solucaoCasas": "UV-DO-WQP-BHI-KQ-TU-ST",
            "solucao": "C-4 A-3 G-1 F-1 B-5 E-5 D-5"
        },
        {
            "situacao": "DhFQHbfm",
            "nivel": 1,
            "solucaoCasas": "bI-DEc-mO-fdV-OP-cUO-hU-FKJ-J",
            "solucao": "D-6 B-1 D-3 G-51 D-5 F-1 C-4 A-3 H-1"
        },
        {
            "situacao": "CFDfThce",
            "nivel": 1,
            "solucaoCasas": "FE-cd-hJWU-DW-UV-TU-CP-EJQ",
            "solucao": "G-2 C-3 E-2 B-4 A-3 F-1"
        },
        {
            "situacao": "CcFQIbWa",
            "nivel": 1,
            "solucaoCasas": "bO-abTV-CEU-FKJ-UP-cU",
            "solucao": "F-1 C-45 A-4 H-2 B-1 H-12 A-2"
        },
        {
            "situacao": "HMOjVhfm",
            "nivel": 1,
            "solucaoCasas": "hS-VT-HN-jU-mb-fc",
            "solucao": "F-6 E-5 D-6 H-1 B-2 G-5"
        },
        {
            "situacao": "GgRcWade",
            "nivel": 1,
            "solucaoCasas": "cN-acT-NQ-GNP-gbc-TV-cU",
            "solucao": "D-6 F-26 B-12 D-2 A-32 F-2 B-1"
        },
        {
            "situacao": "HUITRjbi",
            "nivel": 1,
            "solucaoCasas": "TOQ-HO-bT-ic-Re-jd-QV-IP",
            "solucao": "A-3 D-3 A-4 E-4 D-2 G-2 C-3"
        },
        {
            "situacao": "BHDINmVg",
            "nivel": 1,
            "solucaoCasas": "IPO-BC-DIP-CI-gTU-mT",
            "solucao": "H-1 F-1 A-2 D-3 C-4 G-5"
        },
        {
            "situacao": "JSNehjio",
            "nivel": 1,
            "solucaoCasas": "NcPV-hbd-obc-SU-JP",
            "solucao": "E-6 C-3 H-6 C-13 E-2 A-4 B-2"
        },
        {
            "situacao": "HaKObgop",
            "nivel": 1,
            "solucaoCasas": "HS-OT-Kic-oh-pi",
            "solucao": "D-4 A-4 C-46 G-6 H-6"
        },
        {
            "situacao": "HIQSaden",
            "nivel": 1,
            "solucaoCasas": "SN-QO-aS-dUT-eP-nU",
            "solucao": "F-1 D-1 E-1 C-5 F-5 G-6 H-1"
        },
        {
            "situacao": "HaQgVdjo",
            "nivel": 1,
            "solucaoCasas": "oi-aN-QOb-gh-HUc-NT-VU",
            "solucao": "A-4 F-4 E-5 C-45 F-6 H-6 G-5"
        },
        {
            "situacao": "CEHdMoUc",
            "nivel": 1,
            "solucaoCasas": "UJ-dO-oS-JU-EP-CI-MN-ST",
            "solucao": "F-6 B-4 A-3 G-5 D-6 H-1 E-2"
        },
        {
            "situacao": "CoGOQncp",
            "nivel": 1,
            "solucaoCasas": "oV-CP-GT-VU-noV-pid",
            "solucao": "B-16 G-6 C-2 E-5 F-1 H-6"
        },
        {
            "situacao": "BjIcMSVp",
            "nivel": 1,
            "solucaoCasas": "jH-BG-cN-pT-VU-IO",
            "solucao": "B-6 A-4 D-6 H-6 C-4 G-5"
        },
        {
            "situacao": "EcGTKVMQ",
            "nivel": 1,
            "solucaoCasas": "TNPJH-EU-HJ-GI-QN-cT-KQ-NP-MO",
            "solucao": "G-215 C-3 E-5 A-4 H-5 F-6"
        },
        {
            "situacao": "FcHhIPSW",
            "nivel": 2,
            "solucaoCasas": "hbO-cUV-SU-VKJ-WV-FQ",
            "solucao": "B-121 G-2 D-1 C-3 B-5 A-4"
        },
        {
            "situacao": "BCPcShTU",
            "nivel": 2,
            "solucaoCasas": "UHN-CI-TO-hbT-cU-BH",
            "solucao": "B-4 H-6 C-4 H-3 A-3 F-6"
        },
        {
            "situacao": "FfGTKiNa",
            "nivel": 2,
            "solucaoCasas": "GJ-Kd-ac-fQV-TUPO-NT-VU-FV-JP",
            "solucao": "H-1 C-2 E-4 B-5 A-4 D-2 C-4 H-2 G-2 F-6"
        },
        {
            "situacao": "BVDNbcdf",
            "nivel": 2,
            "solucaoCasas": "BCP-cT-NOU-DO-bc-fe",
            "solucao": "D-3 H-64 A-2 C-4 A-3"
        },
        {
            "situacao": "BhFWGKIO",
            "nivel": 2,
            "solucaoCasas": "BEc-GH-IJQ-KI-FK-QP-cUV-hU-KJ-WQ",
            "solucao": "G-2 A-2 E-2 G-4 A-42 F-5 G-1 B-1 C-4"
        },
        {
            "situacao": "BfCaIgin",
            "nivel": 2,
            "solucaoCasas": "CS-ae-Ib-ec-fd-nh-BU-ST",
            "solucao": "C-4 D-2 E-4 D-5 B-5 H-1 A-3 C-2"
        },
        {
            "situacao": "GHNkbpho",
            "nivel": 2,
            "solucaoCasas": "Nij-pN-hi-oh-jO-kj-Od-Nc-HU-GT",
            "solucao": "C-326 E-13 A-3 D-5 C-3 B-3"
        },
        {
            "situacao": "JjVgbenp",
            "nivel": 2,
            "solucaoCasas": "ec-po-JU-Vih-Ud-ji",
            "solucao": "G-2 F-5 C-4 A-4 D-2 A-3"
        },
        {
            "situacao": "CVFJHgId",
            "nivel": 2,
            "solucaoCasas": "Ib-VI-bOUP-gO-dU-FD",
            "solucao": "C-5 G-4 B-6 G-2 F-1 G-1 H-6"
        },
        {
            "situacao": "HiJgRVcp",
            "nivel": 2,
            "solucaoCasas": "idO-gTUP-pid-cU-RQ-HI",
            "solucao": "B-1 H-6 B-6 H-1 A-2 D-1 C-4 E-5"
        },
        {
            "situacao": "HVJKSofp",
            "nivel": 2,
            "solucaoCasas": "VQ-HN-Sh-NPc-Qi-Kd-JU-fej-j",
            "solucao": "C-3 D-4 E-2 A-32 F-1 H-1"
        },
        {
            "situacao": "KUMibhdf",
            "nivel": 2,
            "solucaoCasas": "dQN-MSTc-fdQO-NT-Kd",
            "solucao": "B-4 G-2 B-21 C-2 F-1 D-1 B-3 E-2 A-4"
        },
        {
            "situacao": "KjNWcfip",
            "nivel": 2,
            "solucaoCasas": "fdQO-NT-Kd-TV-We-OU",
            "solucao": "F-5 B-1 C-3 D-5 A-4 H-1"
        },
        {
            "situacao": "BHKmUkgj",
            "nivel": 2,
            "solucaoCasas": "UdQ-KI-gOd-HU-Ig-BO-gT-mb-dc-jd-QP-kV",
            "solucao": "B-2 G-2 C-4 A-3 E-1 D-13 A-3 E-3 B-43"
        },
        {
            "situacao": "ENKWQhUa",
            "nivel": 2,
            "solucaoCasas": "EPO-QP-Ucb-PcTV-KQ-aS-OT-VUc-QO-WU",
            "solucao": "A-4 D-5 H-1 G-5 A-5 E-5 C-4 E-4 F-6 C-5 D-5"
        },
        {
            "situacao": "FVHicgjm",
            "nivel": 2,
            "solucaoCasas": "idO-FQ-gT-OP-cU-jd-mbc-HO",
            "solucao": "D-16 A-4 F-2 H-1 G-6 D-2 C-3 F-1"
        },
        {
            "situacao": "BaCDbdep",
            "nivel": 3,
            "solucaoCasas": "CS-bcbIV-SU-BCSTi-db-DT-bd-ac-pj",
            "solucao": "C-3 D-5 E-2 A-3 D-3 E-3 H-1 B-2"
        },
        {
            "situacao": "HVRgabij",
            "nivel": 3,
            "solucaoCasas": "VdO-RP-gh-Od-Pc-aNT-HU",
            "solucao": "D-2 E-1 C-45 E-3 A-3 B-5"
        },
        {
            "situacao": "BIDnKhao",
            "nivel": 3,
            "solucaoCasas": "DCS-KJ-hP-obO-nU-ST-BH-aN",
            "solucao": "C-5 E-5 C-4 F-1 H-6 D-1 H-1 C-2 A-3 G-1"
        },
        {
            "situacao": "ESIKPjWi",
            "nivel": 3,
            "solucaoCasas": "je-WTc-PV-EU-VQ-KJP-ST-IO-ed-QV",
            "solucao": "F-1 G-53 E-3 H-1 A-4 B-2 C-4 D-45"
        },
        {
            "situacao": "FOGoNaTd",
            "nivel": 3,
            "solucaoCasas": "NS-di-Tc-obT-FdU-GN-cb-ic",
            "solucao": "A-4 D-1 A-5 E-4 C-3 G-35 D-6 H-5"
        },
        {
            "situacao": "DKRUSfej",
            "nivel": 3,
            "solucaoCasas": "UTI-DWTO-IJ-fQ-RW-QP-Od-KV-JQ-SU",
            "solucao": "F-6 G-1 H-1 F-4 D-21 A-3 E-2"
        },
        {
            "situacao": "CDEkafno",
            "nivel": 3,
            "solucaoCasas": "ng-khJ-fb-ohP-bI-aH-gO",
            "solucao": "A-4 G-6 F-5 H-6 B-4 C-4 D-5"
        },
        {
            "situacao": "EeIcNbno",
            "nivel": 3,
            "solucaoCasas": "nh-IV-cT-Ecdi-VU-Tc-NT-ed",
            "solucao": "G-1 E-3 C-3 A-4 C-4 B-5"
        },
        {
            "situacao": "BKIcMgik",
            "nivel": 3,
            "solucaoCasas": "IJ-cP-Kd-ijh-ki-PN-Mb-BUc-JU-NT",
            "solucao": "G-5 E-3 H-5 B-4 C-4 A-3"
        },
        {
            "situacao": "JeNPTjVg",
            "nivel": 3,
            "solucaoCasas": "Tb-gi-PO-jU-JP-Vd-eV-bT-ic",
            "solucao": "D-5 H-2 F-6 G-4 A-4 H-6 B-6"
        },
        {
            "situacao": "EaFOghjo",
            "nivel": 3,
            "solucaoCasas": "oK-hi-gh-Kd-EcbT-FVU-Tc-ab-OT",
            "solucao": "A-4 B-2 G-5 B-1 C-4 D-3 E-1"
        },
        {
            "situacao": "FjMRNgPn",
            "nivel": 3,
            "solucaoCasas": "Phi-Fd-ih-ROU-ji-hc-nh-NTb-MST",
            "solucao": "F-2 H-1 A-4 E-3 G-53 C-2 D-4 C-4"
        },
        {
            "situacao": "IdKTQhjk",
            "nivel": 3,
            "solucaoCasas": "QV-KQ-VPc-dVP-IO-hi-QdU-kV-jd",
            "solucao": "D-1 E-54 D-3 F-2 A-3 C-4"
        },
        {
            "situacao": "HmNRTbfp",
            "nivel": 3,
            "solucaoCasas": "moh-NQ-Rj-Hd-QVU-dc-jd-fej-pi",
            "solucao": "C-2 G-6 B-21 H-1 F-2 E-2 A-32"
        },
        {
            "situacao": "HQJTNRko",
            "nivel": 3,
            "solucaoCasas": "JI-TOP-QiTO-RQiT-kV-odU-U",
            "solucao": "C-5 E-2 B-4 G-6 F-5 B-6 H-1 A-3 C-4"
        },
        {
            "situacao": "HcQdSpVf",
            "nivel": 3,
            "solucaoCasas": "dOP-fW-ci-pe-SNc-idO-cd-OU-HO",
            "solucao": "D-62 B-1 E-2 F-6 H-5 A-3"
        },
        {
            "situacao": "EpFVGIHW",
            "nivel": 3,
            "solucaoCasas": "Wj-Hd-pN-GH-FQ-NP-EJ-dO-jU",
            "solucao": "C-4 H-4 B-62 G-3 A-4 E-2 G-6 H-6"
        },
        {
            "situacao": "BKEOGeWn",
            "nivel": 4,
            "solucaoCasas": "GJQP-nU-eVQ-WV-EC-BHJ-CI",
            "solucao": "A-2 D-1 F-6 H-1 A-3 C-4 E-2 G-5 E-3"
        },
        {
            "situacao": "BREIOfSi",
            "nivel": 4,
            "solucaoCasas": "OQde-EC-IV-CN-SU-BOQ-NP-fW-id",
            "solucao": "E-2 F-6 H-1 B-65 G-2 A-3 B-4 C-4"
        },
        {
            "situacao": "BcCkTbWi",
            "nivel": 4,
            "solucaoCasas": "ij-kI-Bd-jePU-WV-IP-CIO-O",
            "solucao": "H-2 D-6 H-15 A-3 G-5 D-4 C-3"
        },
        {
            "situacao": "CKDfSohi",
            "nivel": 4,
            "solucaoCasas": "hbe-ob-DW-CN-ecTV-KQO-VdUT-ic-WU-fd",
            "solucao": "G-6 F-6 C-3 G-2 E-2 H-1 B-4 A-3 F-1"
        },
        {
            "situacao": "BeCpEnIb",
            "nivel": 4,
            "solucaoCasas": "IV-Eh-ej-no-CPci-Vdc-Bd",
            "solucao": "E-4 G-4 C-3 B-4 F-2 C-4 A-3 G-3"
        },
        {
            "situacao": "CUDMPjRp",
            "nivel": 4,
            "solucaoCasas": "PQJ-UPI-jW-JQNi-DQN-peP-iT-PO-WU-RP-NH-MN",
            "solucao": "D-2 F-6 E-24 A-3 H-16 G-5 C-4"
        },
        {
            "situacao": "FdGoKeVh",
            "nivel": 4,
            "solucaoCasas": "KQ-diNP-Vi-Qd-FV-iN-oiT-NOU-hc-GNO-O",
            "solucao": "D-1 E-5 A-4 B-6 G-4 D-6 B-2 F-6 E-3 H-1 D-2 C-3"
        },
        {
            "situacao": "DgHpUVWm",
            "nivel": 4,
            "solucaoCasas": "mo-Wjd-HO-DI-Ob-IT-bc-pih-oi-gb",
            "solucao": "H-2 A-4 H-6 G-4 C-34 D-6 G-5 F-4"
        },
        {
            "situacao": "ChISKpjo",
            "nivel": 4,
            "solucaoCasas": "oQ-jiV-KJ-CN-pTU-hc-STO-NT-UP-cU",
            "solucao": "A-4 D-3 F-61 G-5 E-4 A-3 F-3 C-4"
        },
        {
            "situacao": "BoHkNRVg",
            "nivel": 4,
            "solucaoCasas": "Vij-Hd-BU-oiT-jh-ki-Uc-Tb-ROU-NT",
            "solucao": "E-2 H-2 B-162 C-3 H-1 A-3 D-6"
        },
        {
            "situacao": "KSReVjmo",
            "nivel": 4,
            "solucaoCasas": "RW-Vi-ob-mgh-bd-KV-hbc-SU",
            "solucao": "G-2 C-4 E-4 H-62 A-4 B-2 G-1"
        },
        {
            "situacao": "INRbSgWe",
            "nivel": 4,
            "solucaoCasas": "bd-SVPO-dUVPQ-Obd-gOU-IV-NP",
            "solucao": "D-1 A-3 C-5 A-5 F-1 G-5 H-5"
        },
        {
            "situacao": "GOUeaikp",
            "nivel": 4,
            "solucaoCasas": "ijdbT-GN-Ti-kjdb-aS-iT-pc-ed",
            "solucao": "G-56 F-6 H-6 F-4 A-3 G-5 D-5"
        },
        {
            "situacao": "BhDURpWa",
            "nivel": 5,
            "solucaoCasas": "Wj-Re-jd-pj-DCV-db-UH-aN-Hd-bcT-BUc-hi-TU-NT",
            "solucao": "A-2 G-4 A-4 G-6 H-2 E-4 A-3 C-4 F-6"
        },
        {
            "situacao": "BKCbNWUk",
            "nivel": 5,
            "solucaoCasas": "UVec-NTVI-bO-IJUV-kedU-BHJ-UP-cU-CI-KQ",
            "solucao": "E-12 A-3 E-3 A-2 H-6 C-3 D-1 B-5"
        },
        {
            "situacao": "CNGHKkWb",
            "nivel": 5,
            "solucaoCasas": "kIJQ-HJ-CHIT-WU-JH-KI-TO-QP-bT",
            "solucao": "A-35 E-5 H-1 F-6 A-6 G-5"
        },
        {
            "situacao": "DhNoQbRa",
            "nivel": 5,
            "solucaoCasas": "QiTI-bO-NS-hbT-OQ-IOP-DO-Qi-Sh-PQd-RPc-ab-OU",
            "solucao": "A-3 B-1 E-4 B-24 F-2 A-4 G-5 C-43 H-2 G-4"
        },
        {
            "situacao": "CgDTEcWd",
            "nivel": 5,
            "solucaoCasas": "TVI-gO-DQP-cU-PJQ-dV-IPJ-EDIP-CI",
            "solucao": "B-1 D-1 E-4 G-5 D-3 A-34 C-4"
        },
        {
            "situacao": "GgIWJdjp",
            "nivel": 5,
            "solucaoCasas": "IbcP-JH-GihUOb-HU-We-PV-bc-gi",
            "solucao": "D-4 C-3 B-2 A-3 E-4"
        },
        {
            "situacao": "BjFnKQPW",
            "nivel": 5,
            "solucaoCasas": "Phi-QdH-KdO-BE-FdUJQ-We-jUJ-nPV-idU-JI-VP-EJ-eV",
            "solucao": "C-5 A-3 B-1 G-6 E-5 G-3 C-3 D-1"
        },
        {
            "situacao": "ERFNfgop",
            "nivel": 5,
            "solucaoCasas": "FiT-NQi-gbe-pj-ic-eW-RKi-EU-WV-id-fe-oi",
            "solucao": "C-4 B-6 C-64 E-5 H-6 A-4 D-3 F-2 B-4"
        },
        {
            "situacao": "HfImKVRi",
            "nivel": 5,
            "solucaoCasas": "KJ-Ig-VdO-RP-ObeV-JI-gh-Pc-fdO-IP-id-cU-Og-HO-gT-hc-mb",
            "solucao": "F-4 B-5 G-4 A-3 F-1 B-6 D-1 E-5 H-1"
        },
        {
            "situacao": "ChHMKeim",
            "nivel": 5,
            "solucaoCasas": "hSNc-iQNT-ed-KV-CP-cU-mbc-HO-MN",
            "solucao": "A-3 E-5 H-1 D-2 G-6 A-5 B-1 F-6"
        },
        {
            "situacao": "BRFUTVgi",
            "nivel": 5,
            "solucaoCasas": "id-gbc-UH-VU-HOQK-BO-KV-RP-FQ",
            "solucao": "G-1 D-6 F-5 C-4 H-6 D-324 A-3 B-5"
        },
        {
            "situacao": "EfRhSVgj",
            "nivel": 5,
            "solucaoCasas": "hb-gi-SU-Vd-bc-deWV-EPQ-Red-QW-fe",
            "solucao": "C-4 H-5 F-5 D-6 G-2 C-5 A-4 B-5"
        },
        {
            "situacao": "BbCVEkNg",
            "nivel": 5,
            "solucaoCasas": "Ve-khJ-ED-bd-NHIb-DT-CV-dHI-bd-gbc-JU-IP-BO",
            "solucao": "D-6 F-6 B-16 C-2 A-2 E-4 H-1"
        },
        {
            "situacao": "CHFhIkNg",
            "nivel": 5,
            "solucaoCasas": "Ie-ki-CE-hJI-gh-Nc-EUO-iK-cd-KVK-dQ-KJc-FKJ-cPcd-hP-dU-eV",
            "solucao": "E-3 D-2 H-2 G-3 C-4 A-3 B-3"
        },
        {
            "situacao": "GgJjMeop",
            "nivel": 5,
            "solucaoCasas": "pN-GIb-MS-bhP-NO-PVih-jUP-Obd-eVTb-oi-Pc-JU-ST",
            "solucao": "C-5 A-3 B-2 E-3 F-5 C-3"
        },
        {
            "situacao": "FfNRajhn",
            "nivel": 5,
            "solucaoCasas": "hi-jW-Fd-RO-dbT-WUh-Tc-ng-aS-hb-ce-bT-gb-ic-edU-fd",
            "solucao": "G-2 E-2 D-5 C-3 H-1 E-5 A-4 B-5 D-3"
        },
        {
            "situacao": "CKIQSfhk",
            "nivel": 5,
            "solucaoCasas": "fWT-Ie-ki-Sb-CVU-ec-Qd-KV",
            "solucao": "D-3 H-5 E-32 C-3 A-3 B-4 H-1 G-1"
        },
        {
            "situacao": "DPKONoSj",
            "nivel": 5,
            "solucaoCasas": "Od-KV-Sh-oiT-jicU-hc-NO-DI",
            "solucao": "D-3 C-4 G-3 F-16 H-5 A-4 G-1 H-6"
        },
        {
            "situacao": "EnKkPTRp",
            "nivel": 5,
            "solucaoCasas": "Phj-po-nJ-Ki-jWU-JPQ-EP-ij-oVeW-UV-TU-jd-ke",
            "solucao": "F-3 A-4 H-1 F-2 D-6 F-1 D-1 E-3 B-1"
        },
        {
            "situacao": "InMgOQTc",
            "nivel": 5,
            "solucaoCasas": "gbS-chb-ON-IOP-NO-Ph-QP-hU-nc-MN",
            "solucao": "E-5 A-4 D-16 A-24 H-4 F-5 H-6 B-1"
        },
        {
            "situacao": "HQSWTUfn",
            "nivel": 5,
            "solucaoCasas": "Uh-WUO-hb-OPh-be-hb-ec-nh-ce-fWUc-HN-QO-edU",
            "solucao": "F-6 A-4 F-2 D-546 G-5 F-4 B-5 H-1"
        },
        {
            "situacao": "CpRjVkbo",
            "nivel": 5,
            "solucaoCasas": "Rec-CP-pi-cU-idc-Ve-Ud-cU-PV-bc-oi",
            "solucao": "E-3 A-3 E-5 G-3 F-6 A-4 F-5 C-4"
        },
        {
            "situacao": "JSKWMiRo",
            "nivel": 6,
            "solucaoCasas": "iQN-Sh-Mb-KiTV-RO-hP-od-WQ-bc-OU-PO-JP-NT",
            "solucao": "C-4 D-64 G-5 B-2 H-6 A-4 G-2 E-23 H-2"
        },
        {
            "situacao": "BGHjPSWo",
            "nivel": 6,
            "solucaoCasas": "Hdi-ob-SVdH-We-HdcU-BOT-bd-PV-Tc-GT",
            "solucao": "C-34 H-6 F-2 G-4 H-2 B-3 A-3"
        },
        {
            "situacao": "EGJfTcho",
            "nivel": 6,
            "solucaoCasas": "GI-JW-cJ-WU-JW-UJ-WU-JWV-hc-od-fe-EP-IO",
            "solucao": "B-2 F-1 C-3 A-4 E-1 C-6 H-1 D-6 G-1"
        },
        {
            "situacao": "EOHTWkcg",
            "nivel": 6,
            "solucaoCasas": "gb-cJQP-kV-PJ-WQ-JI-OP-TO-bTU-PJ-IP-JI-EJ",
            "solucao": "H-215 B-3 A-4 C-3 E-5 F-6"
        },
        {
            "situacao": "DVEoHmQc",
            "nivel": 6,
            "solucaoCasas": "DJIP-EJIg-cUO-Vi-mn-Ph-OP-hUOb-nUO-bT-gb-TcU-OT-HO-iV-od-bc",
            "solucao": "A-4 D-16 A-1 D-21 H-1 D-5 C-4 A-2 F-1"
        },
        {
            "situacao": "FpHVcmin",
            "nivel": 6,
            "solucaoCasas": "idO-FQ-non-ch-nod-OUc-dOg-pi-VdO-gT-mb-Qd-OU-HO",
            "solucao": "A-4 H-2 D-46 F-1 G-1 D-2 G-5 B-61 H-1 C-3"
        },
        {
            "situacao": "HMJiNphk",
            "nivel": 6,
            "solucaoCasas": "ijO-Mb-OTij-HIT-pcPO-jU-hc-UPe-cPV-ec-ked-cP-bc-PU-JP",
            "solucao": "C-5 D-6 H-6 G-1 F-6 D-1 E-3 B-2"
        },
        {
            "situacao": "PaSmTdWi",
            "nivel": 6,
            "solucaoCasas": "acU-Tg-UTb-dcU-WV-gh-Vd-UT-bcU-Tc-UT-PU-Sb-mg",
            "solucao": "E-42 B-215 D-1 F-5 A-4 G-54"
        },
        {
            "situacao": "CNIQKoik",
            "nivel": 6,
            "solucaoCasas": "Qd-ij-oi-CH-dOdQ-Hd-QVe-dQO-Nc-Kd-OU-IV",
            "solucao": "H-5 D-5 H-6 A-4 G-6 F-15 E-5"
        },
        {
            "situacao": "DVGfMoUa",
            "nivel": 6,
            "solucaoCasas": "ae-oS-fJ-UT-DON-VUP-eVU-PO-JH",
            "solucao": "D-65 H-1 F-6 G-5 B-5 A-4"
        },
        {
            "situacao": "BnGRHiPm",
            "nivel": 6,
            "solucaoCasas": "GcUO-PQd-OU-HO-BH-OQ-UOP-QV-nUOg-dOb-ghU-HO-bT-id-mbc-RQ",
            "solucao": "G-24 E-3 F-6 B-16 F-2 H-1 C-32 H-2 F-4 D-5 A-3"
        },
        {
            "situacao": "DnIfMVOc",
            "nivel": 7,
            "solucaoCasas": "ch-IPc-hS-nhb-ON-bIP-NO-MNTU-ST-fd-DI",
            "solucao": "H-46 C-3 A-4 C-4 F-6 C-6 B-1 D-5 G-4 F-5 A-4"
        },
        {
            "situacao": "GaOhRpVb",
            "nivel": 7,
            "solucaoCasas": "pW-RP-OT-GN-aS-TUc-VT-PO-WU",
            "solucao": "H-13 G-4 F-1 E-5 D-1 F-5 B-2 A-3"
        },
        {
            "situacao": "CJSgcofp",
            "nivel": 8,
            "solucaoCasas": "ce-CV-ejhb-SU-Vihce-JPVihcd-ejh-fej-hi-ghc-bh",
            "solucao": "H-6 A-43 B-4 D-1 F-6 G-5"
        },
        {
            "situacao": "AKMNQjSm",
            "nivel": 0,
            "solucao": "A-3 E-5 H-1 F-6 B-5"
        },
        {
            "situacao": "AmBFDOcg",
            "nivel": 1,
            "solucao": "E-4 D-5 F-6 H-1 B-16 G-6"
        },
        {
            "situacao": "CGJRNTci",
            "nivel": 1,
            "solucao": "B-2 F-1 A-4 D-5 G-1 H-6"
        },
        {
            "situacao": "BHPkRgbm",
            "nivel": 1,
            "solucao": "F-2 H-1 D-6 B-3 E-4 A-3 G-2 H-2"
        },
        {
            "situacao": "DQOTdjip",
            "nivel": 1,
            "solucao": "A-4 E-1 F-6 A-3 G-1 H-6"
        },
        {
            "situacao": "BSHbPUcg",
            "nivel": 1,
            "solucao": "C-3 A-34 D-1 H-1"
        },
        {
            "situacao": "CpDJGahk",
            "nivel": 1,
            "solucao": "B-6 E-2 H-6 G-1 B-1 F-12"
        },
        {
            "situacao": "DKFUJjef",
            "nivel": 1,
            "solucao": "F-6 C-5 E-3 C-4 E-5 A-3 B-4"
        },
        {
            "situacao": "IJKmRVdj",
            "nivel": 1,
            "solucao": "C-4 D-1 G-6 H-6 C-5 E-5"
        },
        {
            "situacao": "AgBkKjcp",
            "nivel": 1,
            "solucao": "G-3 F-6 A-3 F-2 G-2 B-2 C-3 F-4 E-4 D-6"
        },
        {
            "situacao": "JaMOQfbo",
            "nivel": 1,
            "solucao": "F-5 A-4 E-5 C-2 B-1 A-5 H-6 E-4"
        },
        {
            "situacao": "BDMeQRdn",
            "nivel": 1,
            "solucao": "C-2 E-6 F-5 D-6 H-1 A-3 B-4"
        },
        {
            "situacao": "AaBCKhOi",
            "nivel": 1,
            "solucao": "H-1 G-6 B-1 H-5 A-3 G-2 F-1 G-5 E-5"
        },
        {
            "situacao": "BCMTRWbk",
            "nivel": 1,
            "solucao": "D-2 C-2 H-6 B-3 G-2 A-3"
        },
        {
            "situacao": "AUJiSbdm",
            "nivel": 1,
            "solucao": "H-1 B-1 H-2 D-6 G-5 D-3 A-3 B-5 C-4"
        },
        {
            "situacao": "IpJMKhRg",
            "nivel": 1,
            "solucao": "B-1 G-5 C-3 E-54 G-3 B-5 H-1 C-5 D-3 A-4"
        },
        {
            "situacao": "FiHRUhbg",
            "nivel": 1,
            "solucao": "C-3 A-4 E-4 D-5 C-4 D-4"
        },
        {
            "situacao": "BaDcEPMO",
            "nivel": 1,
            "solucao": "F-1 D-1 A-2 C-4 B-1 E-5 G-2"
        },
        {
            "situacao": "GUHkMSOm",
            "nivel": 1,
            "solucao": "B-542 G-42 B-65 D-56 G-6 H-1"
        },
        {
            "situacao": "BCEkGnSb",
            "nivel": 1,
            "solucao": "F-1 C-5 F-5 D-6 H-1 G-1"
        },
        {
            "situacao": "AGEOMbNV",
            "nivel": 3,
            "solucao": "E-3 A-24 D-4 B-2 D-2 H-65 C-4 F-1"
        },
        {
            "situacao": "Omdhgoik",
            "nivel": 3,
            "solucao": "C-6 E-1 B-1 E-3 G-2 A-4 G-6 D-2 G-4 D-6 F-6 H-5"
        },
        {
            "situacao": "KhPdRnbk",
            "nivel": 3,
            "solucao": "B-1 D-5 F-121 B-2 H-6 A-4 D-1 G-2"
        },
        {
            "situacao": "HNQpUVWk",
            "nivel": 3,
            "solucao": "B-2 F-3 A-3 F-46 D-16 H-6"
        },
        {
            "situacao": "AiDaETKS",
            "nivel": 3,
            "solucao": "G-4 D-2 F-1 C-5 D-6 E-5 D-2 B-6 G-6 H-1"
        },
        {
            "situacao": "BHKNMiSa",
            "nivel": 3,
            "solucao": "C-4 D-3 B-3 D-5 A-3 E-2 F-6 C-5"
        },
        {
            "situacao": "FoKQNjRb",
            "nivel": 3,
            "solucao": "B-6 F-5 D-4 C-4 G-5 A-45 B-1 E-3 H-1"
        },
        {
            "situacao": "CcEoFWhi",
            "nivel": 5,
            "solucao": "B-1 F-6 B-4 F-1 H-1 D-162 B-16 G-1 A-2"
        },
        {
            "situacao": "HPbjekfm",
            "solucao": "E-6 G-51 A-3 D-6 C-2 H-1 F-6"
        },
        {
            "situacao": "MkNObhcg",
            "solucao": "F-2 E-1 F-6 B-56 H-1"
        },
        {
            "situacao": "HPVjWfbp",
            "solucao": "D-6 E-4 D-3 F-5 G-2 A-3 H-6"
        },
        {
            "situacao": "CVGKPThj",
            "solucao": "D-5 C-3 A-3 E-5 H-6 B-6 G-1"
        },
        {
            "situacao": "BfCJNiUn",
            "solucao": "A-3 F-6 C-4 B-65 H-1 D-5"
        },
        {
            "situacao": "DHIbMeWj",
            "solucao": "F-6 G-4 C-4 F-5 A-4 G-5 E-3 H-6"
        },
        {
            "situacao": "CEMmPcTk",
            "solucao": "E-4 D-1 B-45 C-3 H-64 A-4"
        },
        {
            "situacao": "CKEUGoHj",
            "solucao": "D-3 F-1 D-1 E-3 F-1 H-6 A-3 E-1 B-5 C-4"
        },
        {
            "situacao": "GdIeRoWf",
            "solucao": "F-1 D-6 H-5 F-6 D-3 A-2 F-2 A-3 C-3"
        },
        {
            "situacao": "CIEmPcRk",
            "solucao": "B-4 A-3 B-1 E-35 D-1 C-4 G-5 H-6"
        },
        {
            "situacao": "AWEGMphk",
            "solucao": "A-2 F-6 A-3 F-2 G-1 H-6 C-4 D-2 E-2"
        },
        {
            "situacao": "DTJWNemp",
            "solucao": "H-6 B-1 D-6 E-2 G-1 H-1 F-6"
        },
        {
            "situacao": "AdCaGpRo",
            "solucao": "A-2 C-43 G-4 A-3 F-6 H-1 F-3 D-2 E-3"
        },
        {
            "situacao": "BdERMOQm",
            "solucao": "B-6 D-6 A-2 B-1 F-1 H-12 E-2"
        },
        {
            "situacao": "AcJWMSNb",
            "solucao": "D-6 A-3 G-3 B-15 D-5 C-5"
        },
        {
            "situacao": "AOEoRndg",
            "solucao": "C-34 G-4 H-1 A-3 E-5 F-1 G-6 D-1"
        },
        {
            "situacao": "BKHiIePk",
            "solucao": "G-31 B-5 E-346 C-2 A-3 C-3 A-2 C-4 F-6 H-6 C-6 D-1"
        },
        {
            "situacao": "NmPbQeRp",
            "solucao": "A-2 D-1 F-6 G-4 H-6 D-2 G-6 B-1"
        },
        {
            "situacao": "DKFjSTWd",
            "solucao": "D-1 F-1 E-2 B-5 E-6 D-61 C-5 G-6 H-1"
        },
        {
            "situacao": "AQBHChEI",
            "solucao": "E-2 C-2 E-34 A-31 G-5 A-2 E-16 B-6 F-1"
        },
        {
            "situacao": "DjGfKphm",
            "solucao": "A-3 H-2 E-4 C-3 D-5 A-4"
        },
        {
            "situacao": "BECUHPeg",
            "solucao": "F-6 D-1 F-4 B-5 C-3 A-2 G-5 F-1 H-1 C-6 G-1"
        },
        {
            "situacao": "AcDnPjTo",
            "solucao": "G-6 A-2 B-6 D-13 H-16 B-1 D-6 C-4 G-3 F-6"
        },
        {
            "situacao": "CkJgNbhn",
            "solucao": "G-2 B-6 D-2 A-4 G-6 F-1 D-61 H-1"
        },
        {
            "situacao": "HIMNcgnp",
            "solucao": "E-64 C-3 E-1 D-3 A-43 H-5 C-3 E-4 B-4"
        },
        {
            "situacao": "FPKUMgcj",
            "solucao": "H-6 C-4 E-2 A-4 F-1"
        },
        {
            "situacao": "BfDMNecm",
            "solucao": "C-5 F-6 B-5 A-3 E-3 H-1 F-4 D-3 C-4"
        },
        {
            "situacao": "BPDGbhio",
            "solucao": "F-16 H-6 A-2 C-4 H-1 C-6 A-3 E-1 G-6"
        },
        {
            "situacao": "CUEkJOTi",
            "solucao": "H-6 C-5 A-3 C-43 A-5 E-4 D-6"
        },
        {
            "situacao": "AIEFToci",
            "solucao": "A-2 E-1 H-1 F-1 G-1 E-2"
        },
        {
            "situacao": "BRUkVcWm",
            "solucao": "E-35 A-3 C-2 B-5 C-3 H-1 G-5 C-6 D-6"
        },
        {
            "situacao": "KgMaVnhj",
            "solucao": "A-45 G-26 E-54 H-56 A-43 C-3"
        },
        {
            "situacao": "CoHSQkcf",
            "solucao": "B-1 H-5 B-6 D-1 G-6 E-5 H-6 F-6"
        },
        {
            "situacao": "FOIhJTfk",
            "solucao": "D-2 B-3 E-3 C-4 F-2 A-4 F-3 B-1 C-3"
        },
        {
            "situacao": "FGMPekjo",
            "solucao": "A-4 B-3 C-2 D-3 A-1 H-1 C-3"
        },
        {
            "situacao": "AUESGeKn",
            "solucao": "H-1 D-2 E-2 D-62 E-4 C-4 A-31 H-21 F-6"
        },
        {
            "situacao": "GiIpRkfj",
            "solucao": "H-1 A-3 F-6 A-1 D-16 F-2 B-1 C-3 G-5"
        },
        {
            "situacao": "AcENTjUW",
            "solucao": "C-4 D-2 G-2 H-4 E-2 A-3 F-6"
        },
        {
            "situacao": "ERIJMhmo",
            "solucao": "F-1 A-3 B-5 E-2 G-21 H-1"
        },
        {
            "situacao": "EFGpMdQe",
            "solucao": "E-2 A-4 D-6 C-2 D-2 B-4 H-6 F-6"
        },
        {
            "situacao": "AQCnRdSU",
            "solucao": "D-16 G-2 F-16 D-2 A-3 B-5 E-5"
        },
        {
            "situacao": "GITeWdgh",
            "solucao": "G-1 C-1 D-6 C-3 E-5 H-1 A-3 B-4"
        },
        {
            "situacao": "BdDEMRVb",
            "solucao": "H-1 G-6 B-6 A-2 E-2 G-1 F-5"
        },
        {
            "situacao": "GTJnKhfi",
            "solucao": "A-24 F-1 C-35 D-1 G-5 E-4"
        },
        {
            "situacao": "APNpagbd",
            "solucao": "B-5 D-6 G-2 C-4 H-6 F-1 A-3"
        },
        {
            "situacao": "CIKfNcSp",
            "solucao": "D-5 C-4 G-2 F-6 B-4 A-3 H-6"
        },
        {
            "situacao": "IiMmScWf",
            "solucao": "G-5 H-5 G-13 A-42 E-2 D-1 C-3"
        },
        {
            "situacao": "CUSkcfmp",
            "solucao": "E-2 G-2 A-4 C-3 D-5 A-3 E-4 F-5"
        },
        {
            "situacao": "FWINbpeh",
            "solucao": "F-6 B-5 H-1 G-5 A-4 C-3 D-2"
        },
        {
            "situacao": "EgHPWjcn",
            "solucao": "E-4 D-3 B-2 H-1 A-43 C-3"
        },
        {
            "situacao": "KSVgWfjo",
            "solucao": "H-1 F-5 D-2 C-5 A-4 C-3 B-2"
        },
        {
            "situacao": "CSDUWnio",
            "solucao": "H-6 A-4 E-54 G-6 C-4 F-1"
        },
        {
            "situacao": "IbWaepfi",
            "solucao": "E-6 G-5 B-1 F-1 D-21 C-5 F-6 H-1"
        },
        {
            "situacao": "CkDOFcUp",
            "solucao": "H-6 A-3 F-21 C-4 F-5 A-6 B-6 E-4 H-1"
        },
        {
            "situacao": "DIGeKOko",
            "solucao": "B-3 H-1 F-3 B-1 E-53 A-3 C-2 D-6 G-6"
        },
        {
            "situacao": "FWHNKUhm",
            "solucao": "E-5 B-5 F-6 A-4 H-1 A-5 G-1"
        },
        {
            "situacao": "GHMbPgRp",
            "solucao": "E-5 D-6 H-1 G-5 F-1 H-5"
        },
        {
            "situacao": "ChMpNnVo",
            "solucao": "H-1 C-3 A-3 B-1 F-16 D-6 E-2"
        },
        {
            "situacao": "CPEaFchi",
            "solucao": "D-2 C-54 A-3 E-4 B-4 A-4"
        },
        {
            "situacao": "HSKgTean",
            "solucao": "D-1 C-53 A-4 C-54 H-6 F-5"
        },
        {
            "situacao": "BVDNMSae",
            "solucao": "H-5 A-2 D-1 A-3 F-2 E-2 H-1 C-4 G-1"
        },
        {
            "situacao": "BhFoHSci",
            "solucao": "E-4 A-2 G-1 H-6 C-4 B-1 D-6 B-5 C-6 G-4 A-4"
        },
        {
            "situacao": "AQDkadcp",
            "solucao": "A-3 C-423 B-4 A-2 G-3 H-1 E-2"
        },
        {
            "situacao": "ANDiSofh",
            "solucao": "G-6 A-2 B-1 H-1 F-6 E-1 D-61 F-1"
        },
        {
            "situacao": "GJWmbcno",
            "solucao": "F-1 A-2 E-1 D-12 H-1 C-6 G-1"
        },
        {
            "situacao": "FiPfQpSh",
            "solucao": "E-3 A-4 E-4 D-5 C-3 G-2 H-1"
        },
        {
            "situacao": "GJIjMcdn",
            "solucao": "H-16 F-6 C-53 B-5 C-6 G-65 D-6"
        },
        {
            "situacao": "BpCkIVSe",
            "solucao": "F-6 H-6 D-6464 G-2 B-6 A-3 C-4"
        },
        {
            "situacao": "BHIkbdhn",
            "solucao": "B-3 G-2 C-3 F-5 A-3 H-1 A-4 G-5 D-5 C-5"
        },
        {
            "situacao": "CNKaWmhp",
            "solucao": "A-4 C-5 F-1 D-126 H-6 E-5 G-1"
        },
        {
            "situacao": "AmEHGQWo",
            "solucao": "F-4 H-51 D-2 E-3 B-1 A-3 H-4 G-5 F-1 C-4"
        },
        {
            "situacao": "HbIoKcMi",
            "solucao": "H-15 G-3 B-1 D-1 E-54 D-5 F-6"
        },
        {
            "situacao": "EJOSUkdo",
            "solucao": "H-6 D-2 G-5 B-43 A-4 B-6 F-65"
        },
        {
            "situacao": "EFHiVofg",
            "solucao": "D-5 F-1 D-1 G-6 D-5 H-1 G-5 B-4 F-6 A-4"
        },
        {
            "situacao": "CkMjRfTb",
            "solucao": "B-6 F-5 E-4 B-3 A-3 C-2 D-6 E-5"
        },
        {
            "situacao": "AmISUoei",
            "solucao": "D-2 B-1 C-3 F-6 E-4 D-2 A-3 G-5"
        },
        {
            "situacao": "GgMdOhQp",
            "solucao": "E-2 C-2 E-4 A-3 H-6 B-1 D-6 G-4"
        },
        {
            "situacao": "OWSkaodf",
            "solucao": "A-3 C-3 E-2 C-2 B-5 H-5 F-1"
        },
        {
            "situacao": "DNIdPmac",
            "solucao": "F-13 H-5 G-1 C-4 D-5 A-4"
        },
        {
            "situacao": "CQINKbdo",
            "solucao": "B-4 E-5 F-2 D-3 C-4 E-4 A-3 H-1"
        },
        {
            "situacao": "GTKbOnPf",
            "solucao": "A-2 D-2 G-3 B-2 G-13 F-1 B-1 F-2 C-4 E-3 A-3"
        },
        {
            "situacao": "BFCmQaho",
            "solucao": "C-4 E-4 B-4 F-2 A-3 C-2 D-1"
        },
        {
            "situacao": "CWGaIgMN",
            "solucao": "E-4 H-42 D-1 E-6 A-3 H-56 B-5 A-5 F-1"
        },
        {
            "situacao": "AfJWPigp",
            "solucao": "G-2 C-3 A-32 F-1 G-1 H-16"
        },
        {
            "situacao": "BHSbWegi",
            "solucao": "B-4 F-5 G-2 F-6 E-5 H-6 A-3"
        },
        {
            "situacao": "JbMUTnfp",
            "solucao": "B-2 F-1 H-6 A-4 C-2 B-6 G-5"
        },
        {
            "situacao": "DjHKMbSU",
            "solucao": "G-2 F-6 A-4 B-61 D-5 B-5 E-2"
        },
        {
            "situacao": "ERKTMpPk",
            "solucao": "G-3 F-61 G-1 D-2 H-6 C-4 E-2 A-3"
        },
        {
            "situacao": "AHRiSfUo",
            "solucao": "B-4 E-2 B-2 A-32 E-32 C-4 D-1 H-1"
        },
        {
            "situacao": "BmDbMpen",
            "solucao": "D-1 C-5 G-6 B-1 A-3 E-2 F-6 H-1"
        },
        {
            "situacao": "DgMdWchk",
            "solucao": "H-5 E-6 F-15 C-32 A-4 F-3 E-4"
        },
        {
            "situacao": "KSMNVoen",
            "solucao": "B-2 E-15 F-15 H-1 G-5 A-4 D-3 C-2"
        },
        {
            "situacao": "AVKiMQRk",
            "solucao": "A-3 F-5 B-15 G-5 C-4 H-6 B-3 F-3 E-2"
        },
        {
            "situacao": "AODgGdVj",
            "solucao": "F-6 H-6 B-13 C-42 E-3 D-1 A-32"
        },
        {
            "situacao": "EkIbPhQV",
            "solucao": "E-4 C-4 H-5 A-435 B-5 G-4"
        },
        {
            "situacao": "AkFdGNMQ",
            "solucao": "C-4 E-2 F-6 H-5 F-2 A-323 D-1 H-2 G-2 B-6"
        },
        {
            "situacao": "DhKjWmep",
            "solucao": "F-1 D-51 A-3 H-1 A-4 C-5 B-2 D-4 F-3 C-4"
        },
        {
            "situacao": "AeCNKPQh",
            "solucao": "F-6 B-646 D-1 A-3 F-4 G-5 E-5 H-1"
        },
        {
            "situacao": "CUNWgjhn",
            "solucao": "B-2 A-3 G-1 D-4 E-2 C-32 H-1"
        },
        {
            "situacao": "ADBfKRSm",
            "solucao": "D-6 C-24 A-2 C-1 D-5 H-1 F-5 G-1 E-5"
        },
        {
            "situacao": "DOIJWebd",
            "solucao": "C-3 G-2 D-4 A-3 B-2"
        },
        {
            "situacao": "BWEeKSOU",
            "solucao": "F-2 G-6 A-2 C-4 D-6 F-1 G-3 A-3 E-5"
        },
        {
            "situacao": "MNQmTfin",
            "solucao": "D-12 B-2 F-6 C-4 F-5 A-2 H-1 D-6"
        },
        {
            "situacao": "AaEdJORV",
            "solucao": "C-5 G-5 C-3 E-5 C-4 B-2 C-2 A-3"
        },
        {
            "situacao": "BkFSWden",
            "solucao": "C-5 G-6 B-6 C-4 H-1 B-5 A-3 H-26 E-5 F-6"
        },
        {
            "situacao": "HKJNVode",
            "solucao": "F-16 A-2 E-5 G-1 C-4 D-2 H-6 B-5"
        },
        {
            "situacao": "CSJaMdOf",
            "solucao": "B-1 H-5 E-2 F-51 D-26 H-6 C-4"
        },
        {
            "situacao": "AaEVHebf",
            "solucao": "B-1 A-2 F-5 H-5 F-6 G-2 E-3 A-4 C-4"
        },
        {
            "situacao": "GNHmJpRU",
            "solucao": "C-3 E-4 B-3 A-3 D-1 F-1 G-54 F-5"
        },
        {
            "situacao": "BQChGmbj",
            "solucao": "F-1 D-216 F-26 B-5 G-1 B-6 H-6"
        },
        {
            "situacao": "AgDPTjUn",
            "solucao": "G-4 B-1 G-2 C-4 E-3 H-1 A-3 D-4 F-6"
        },
        {
            "situacao": "EVUbWkdg",
            "solucao": "H-2 C-1 G-5 B-35 G-1 D-2 G-4 C-4 A-43 B-1 G-3 F-6 D-1"
        },
        {
            "situacao": "CPEnGNJk",
            "solucao": "G-5 D-1 B-6 G-3 E-2 D-1 H-6 C-5"
        },
        {
            "situacao": "ADBfJjNa",
            "solucao": "H-1 D-65 C-3 A-2 F-6 B-4 H-2 E-4"
        },
        {
            "situacao": "CDFTNQmo",
            "solucao": "G-2 H-1 B-3 C-5 E-2 G-1 C-4 A-3"
        },
        {
            "situacao": "DpEmFTPS",
            "solucao": "A-4 F-3 B-5 D-1 G-4 E-4 A-34 G-6 C-4 B-1"
        },
        {
            "situacao": "BfDcGWTV",
            "solucao": "A-2 F-6 D-1 F-5 E-3 H-5 B-6 C-4 B-5"
        },
        {
            "situacao": "AdEQKRUo",
            "solucao": "B-46 A-2 D-6 H-1 G-1 B-2"
        },
        {
            "situacao": "ACEaHOQc",
            "solucao": "D-2 F-46 C-5 H-6 D-1 A-2 G-5"
        },
        {
            "situacao": "COKnMSVk",
            "solucao": "B-5 C-45 G-6 B-1 E-2 H-6 D-1 F-2"
        },
        {
            "situacao": "GQJWRUap",
            "solucao": "D-5 E-46 H-6 G-2 A-2 B-5 H-3 C-4"
        },
        {
            "situacao": "AFJpKMdi",
            "solucao": "B-5 F-1 C-53 G-1 H-1 D-6 F-2 A-32 D-2 B-3"
        },
        {
            "situacao": "CgHkKjPh",
            "solucao": "F-5 E-4 A-3 G-4 D-6 A-4 D-4 C-34"
        },
        {
            "situacao": "BaDkHWTg",
            "solucao": "B-1 F-6 H-2 C-4 E-2 A-3 D-6 H-6"
        },
        {
            "situacao": "FcHSPmVi",
            "solucao": "C-4 G-4 A-4 E-542 C-3 A-5 F-1"
        },
        {
            "situacao": "GiISJUmn",
            "solucao": "D-2 F-1 D-1 B-6 H-1 A-2 G-1"
        },
        {
            "situacao": "BMEfIpJg",
            "solucao": "C-5 D-6 H-1 D-5 H-5 B-1 F-6 E-4 G-5 D-6"
        },
        {
            "situacao": "CfEgIeQR",
            "solucao": "A-2 E-4 F-5 C-4 F-2 E-2 G-4 D-1 A-3 D-3 H-5"
        },
        {
            "situacao": "GgHfJPNe",
            "solucao": "H-6 G-24 D-56 E-5 D-2 G-1 A-3 G-2 B-1"
        },
        {
            "situacao": "CJDSOhWk",
            "solucao": "H-5 D-1 G-6 H-1 A-3 F-1 D-2"
        },
        {
            "situacao": "DnEkQdSj",
            "solucao": "F-1 C-4 A-34 C-2 B-1 G-2 H-6 F-3 E-4 D-5"
        },
        {
            "situacao": "MTOhQkno",
            "solucao": "A-3 F-5 E-4 C-3 D-1 G-1"
        },
        {
            "situacao": "FPeifpgn",
            "solucao": "H-1 F-1 G-21 C-5 A-4 E-5"
        },
        {
            "situacao": "GMHTQVmn",
            "solucao": "A-3 G-1 B-3 F-5 C-3 E-5 H-1"
        },
        {
            "situacao": "GIJOWmae",
            "solucao": "H-51 E-5 C-4 H-6 G-1 A-2 F-1"
        },
        {
            "situacao": "AbEeHPJc",
            "solucao": "A-3 F-46 H-2 E-2 B-2 G-4 C-4 D-6"
        },
        {
            "situacao": "AdDTIaOc",
            "solucao": "D-6 E-54 F-2 G-4 A-2 D-3 A-43 C-4"
        },
        {
            "situacao": "AFGpKiRa",
            "solucao": "A-2 E-5 H-12 B-4 E-2 F-62 C-3 D-1 C-1"
        },
        {
            "situacao": "FpGVIkMT",
            "solucao": "A-4 D-5 C-2 D-6 B-6 A-54 F-6 G-2"
        },
        {
            "situacao": "EFPdefnp",
            "solucao": "C-4 E-4 G-2 D-4 A-4 B-4 F-5"
        },
        {
            "situacao": "CKFRHnTi",
            "solucao": "A-2 F-1 B-4 H-6 F-5 A-4 E-3 D-5 C-4"
        },
        {
            "situacao": "AKBSEFdm",
            "solucao": "B-4 C-2 A-2 D-1 A-3 F-4 E-4 D-2 H-1 G-6"
        },
        {
            "situacao": "AkEJMoOf",
            "solucao": "A-243 H-6 E-3 D-4 E-2 G-3 F-1 C-4 H-4"
        },
        {
            "situacao": "BGCTIdjn",
            "solucao": "D-134 G-5613 D-161 G-4 D-3 G-16 H-16 D-6 F-6"
        },
        {
            "situacao": "CFHRPiWm",
            "solucao": "D-546 F-1 B-5 H-1 D-1 G-5 F-5 H-1"
        },
        {
            "situacao": "FkMRPhUo",
            "solucao": "A-42 F-1 G-3 E-4 H-1 C-2 D-4 C-4"
        },
        {
            "situacao": "KiNRQdfh",
            "solucao": "E-3 D-5 F-15 A-46 E-5 B-6 H-1 G-5"
        },
        {
            "situacao": "BcRhVekn",
            "solucao": "D-2 C-4 H-1 F-5 H-2 A-3 D-1 G-5"
        },
        {
            "situacao": "BSCEITMb",
            "solucao": "B-1 G-1 D-5 F-1 H-16"
        },
        {
            "situacao": "EOIQRfTo",
            "solucao": "B-2 F-6 B-1 H-1 G-2 C-3 A-3"
        },
        {
            "situacao": "HONoTmaf",
            "solucao": "C-43 G-2 F-1 G-5 H-5 B-3 D-1 A-3"
        },
        {
            "situacao": "CEGfHpIN",
            "solucao": "H-3 C-32 F-1 C-61 B-5 D-6 H-16 F-6"
        },
        {
            "situacao": "IeJPWngo",
            "solucao": "A-4 F-124 G-21 C-3 F-1 H-6 A-2 H-1"
        },
        {
            "situacao": "BcFPGjRV",
            "solucao": "H-1 F-1 G-5 C-5 E-3 C-3 H-5 E-2 B-1 A-3"
        },
        {
            "situacao": "MkQbefip",
            "solucao": "A-2 E-4 C-4 B-6 D-2 A-4 F-5"
        },
        {
            "situacao": "HTSoUkWi",
            "solucao": "D-6 G-5 E-6 A-4 F-56 G-4 H-6"
        },
        {
            "situacao": "ACJVTjao",
            "solucao": "B-3 A-3 B-5 F-6 H-1 G-2 C-4"
        },
        {
            "situacao": "DmIKNhPe",
            "solucao": "C-2 B-1 E-2 H-6 F-1 D-4"
        },
        {
            "situacao": "DFIkQdmo",
            "solucao": "G-1 D-6 A-3 F-1 B-4 H-16"
        },
        {
            "situacao": "ANDOKdaj",
            "solucao": "C-4 G-2 F-6 B-3 A-3 H-6 E-4 C-3"
        },
        {
            "situacao": "AnBcFWGM",
            "solucao": "G-3 C-2 G-2 D-1 B-1 F-6 B-56 A-2 H-2 B-2 E-4"
        },
        {
            "situacao": "DKHORVWi",
            "solucao": "F-1 A-3 D-2 H-1 C-2"
        },
        {
            "situacao": "ESGOafmp",
            "solucao": "E-24 G-2 D-3 C-3 F-5 B-3 A-4"
        },
        {
            "situacao": "CHDpSVen",
            "solucao": "F-5 D-1 E-1 D-6 C-4 G-6 H-1"
        },
        {
            "situacao": "IeKoMOQR",
            "solucao": "E-3 C-5 D-1 A-34 H-4 A-2 F-3 E-1 C-4"
        },
        {
            "situacao": "BfKoOVPS",
            "solucao": "A-34 F-4 A-3 G-4 H-2 F-1 D-1 F-5 C-4 B-5"
        },
        {
            "situacao": "ACEKMWQR",
            "solucao": "B-2 A-2 G-5 F-6 G-2 E-2 A-3"
        },
        {
            "situacao": "BJDpIgMT",
            "solucao": "H-4 A-4 D-6 E-4 B-5 C-4 H-6 F-1"
        },
        {
            "situacao": "EKIWPhbp",
            "solucao": "A-4 H-1 C-42 F-1 B-4 G-2"
        },
        {
            "situacao": "DmHVMibd",
            "solucao": "C-3 A-4 G-42 E-34 G-1 E-2 B-1"
        },
        {
            "situacao": "BiKmMOef",
            "solucao": "F-5 C-4 B-6 D-1 C-5 E-3 G-56 H-5 G-3 A-3"
        },
        {
            "situacao": "EhGaNjQk",
            "solucao": "D-1 A-4 E-2 B-6 H-65 C-3 E-4 F-6 G-5"
        },
        {
            "situacao": "CaEePmVi",
            "solucao": "G-4 D-6 E-6 F-1 A-4 B-2 C-4 E-3 A-2"
        },
        {
            "situacao": "BpMVNmST",
            "solucao": "H-4 E-31 D-5 F-2 B-6 A-3 G-3 F-1 C-3"
        },
        {
            "situacao": "DPGNSdUe",
            "solucao": "E-2 B-51 H-6 B-5 G-6 F-6 A-4"
        },
        {
            "situacao": "CEHQKfOi",
            "solucao": "G-2 A-2 H-1 D-6 F-6 C-2"
        },
        {
            "situacao": "HTMOQjck",
            "solucao": "D-24 C-2 A-3 F-61 H-65"
        },
        {
            "situacao": "DHRWdphj",
            "solucao": "A-34 B-3 D-4 C-4 H-5 F-1 G-1"
        },
        {
            "situacao": "BHGnRdio",
            "solucao": "F-62 G-1 H-1 B-3 D-1 C-3 A-3 F-5 E-5"
        },
        {
            "situacao": "FhPkbjfm",
            "solucao": "H-1 B-21 H-21 C-3 H-3 E-2 B-4 A-4"
        },
        {
            "situacao": "BGFbVWep",
            "solucao": "B-3 H-1 C-5 A-3 C-3 D-2 C-4"
        },
        {
            "situacao": "ABJpNaSW",
            "solucao": "E-3 H-5 E-6 A-3 E-5 D-6 C-4 B-3"
        },
        {
            "situacao": "AoGKINSa",
            "solucao": "G-3 E-24 B-1 D-5 F-24 D-4 H-2 C-3 A-3 B-5"
        },
        {
            "situacao": "BMPVSfgk",
            "solucao": "H-5 E-2 H-1 F-5 A-3 B-2 G-1"
        },
        {
            "situacao": "ERFkTeWp",
            "solucao": "H-61 G-51 F-6 C-4 A-3 E-2 D-61"
        },
        {
            "situacao": "CbEWGiTd",
            "solucao": "C-5 D-6 G-31 B-1 F-6 E-2 H-6"
        },
        {
            "situacao": "CdHjNWPb",
            "solucao": "B-5 C-3 G-5 E-32 F-4 A-3 B-1 C-5 D-6 H-1"
        },
        {
            "situacao": "AGFSNgRp",
            "solucao": "G-4 E-3 A-2 C-4 E-5 D-32 A-4 H-6 B-3 F-1"
        },
        {
            "situacao": "CWFbPkVh",
            "solucao": "C-5 G-3 C-4 A-3 B-5 A-4 H-1 G-5 F-6"
        },
        {
            "situacao": "ATBmEJdh",
            "solucao": "B-6 C-2 D-1 H-1 B-2 G-6 A-2"
        },
        {
            "situacao": "FVGORifk",
            "solucao": "C-3 A-4 F-2 E-4 C-2 D-3 A-3"
        },
        {
            "situacao": "AKCOSbcf",
            "solucao": "A-3 H-5 C-4 B-45"
        },
        {
            "situacao": "AWJQPocj",
            "solucao": "H-1 A-3 G-2 F-16 A-2 F-1"
        },
        {
            "situacao": "DcFiSnam",
            "solucao": "A-2 C-4 A-4 G-3 F-16 E-2 G-2 H-1"
        },
        {
            "situacao": "CFISJiWo",
            "solucao": "B-5 H-6 C-4 F-6 D-1 F-1 G-5 C-1 H-1"
        },
        {
            "situacao": "IbSTWfgo",
            "solucao": "D-2 F-5 D-4 G-2 C-2 A-4 C-4 E-5"
        },
        {
            "situacao": "ARJMUodf",
            "solucao": "G-4 A-32 H-6 B-4 D-2 G-1 F-1"
        },
        {
            "situacao": "AmCRHTSk",
            "solucao": "F-426 D-5 H-6 G-2 C-3 B-1 A-3"
        },
        {
            "situacao": "BCHNOdSb",
            "solucao": "E-3 F-5 D-3 C-4 A-3 B-4"
        },
        {
            "situacao": "AoBnCdQi",
            "solucao": "F-1 H-1 C-3 F-6 B-16 D-16 A-2 C-6 H-6 G-5"
        },
        {
            "situacao": "CQKkMONa",
            "solucao": "G-4 B-5 E-2 B-3 H-26 G-2 B-6 A-4 C-5 D-6"
        },
        {
            "situacao": "NTWjbngh",
            "solucao": "B-2 H-21 C-4 E-2 G-2 A-3 F-1 A-2"
        },
        {
            "situacao": "EaIebpkn",
            "solucao": "E-2 B-2 H-1 A-4 C-3 H-2 F-6"
        },
        {
            "situacao": "CVDaSdio",
            "solucao": "H-6 E-2 D-1 A-3 C-4 H-2 D-3"
        },
        {
            "situacao": "AcFHMUVh",
            "solucao": "H-6 F-56 A-2 C-4 G-56 C-5 A-4 B-6"
        },
        {
            "situacao": "AIKPeghj",
            "solucao": "G-2 B-4 E-5 C-4 A-3 F-2 D-4"
        },
        {
            "situacao": "CGSWUejo",
            "solucao": "E-3 C-2 A-3 H-1 B-3 A-4"
        },
        {
            "situacao": "HRMUOaPn",
            "solucao": "H-1 F-2 E-4 D-6 G-4 D-5 B-5 C-3"
        },
        {
            "situacao": "AeDUFKIQ",
            "solucao": "E-5 G-2 C-5 D-6 C-2 A-23 D-2 A-6 B-6"
        },
        {
            "situacao": "HpMRSeVd",
            "solucao": "E-13 B-1 C-2 H-6 B-6 H-2 D-4 E-1 A-3"
        },
        {
            "situacao": "EGNmbicf",
            "solucao": "A-4 H-5 C-3 E-4 C-4 E-2 B-3 D-1"
        },
        {
            "situacao": "BUESQmci",
            "solucao": "C-54 E-54 H-5 A-3 E-1 F-1"
        },
        {
            "situacao": "AeBbHKRh",
            "solucao": "E-2 H-1 B-5 H-4 B-6 C-3 D-1 E-5 F-5 G-5 B-3 A-3"
        },
        {
            "situacao": "BIFTHbWf",
            "solucao": "A-2 D-2 H-5 C-4 F-1 D-6 H-1 G-5 A-4"
        },
        {
            "situacao": "DMJRUieh",
            "solucao": "D-4 H-1 C-3 F-1 H-2 A-3 B-2"
        },
        {
            "situacao": "KNMgPcQk",
            "solucao": "E-3 B-2 C-2 D-1 E-5 G-45 H-6 A-4"
        },
        {
            "situacao": "EaGUHWJj",
            "solucao": "H-6 D-6 B-2 C-3 E-2 G-3 A-4 F-56 G-4"
        },
        {
            "situacao": "AJFcMTPQ",
            "solucao": "H-1 C-5 D-1 C-3 E-2 A-3 B-5 H-5"
        },
        {
            "situacao": "FWMfRnUo",
            "solucao": "E-5 C-312 G-2 H-1 A-4 E-2 F-1"
        },
        {
            "situacao": "CSDIOjen",
            "solucao": "F-6 D-3 H-1 C-43 A-4 B-2 G-5"
        },
        {
            "situacao": "BgHdOmej",
            "solucao": "B-2 D-6 E-4 C-3 A-3 C-4 D-6 E-2 D-4 B-6 F-1 G-5 A-3 H-5"
        },
        {
            "situacao": "MQNgefjn",
            "solucao": "D-2 F-6 C-3 D-1 A-2 C-1 H-12"
        },
        {
            "situacao": "EjGVKPbc",
            "solucao": "H-6 F-5 G-1 D-515 E-5 B-6 A-4"
        },
        {
            "situacao": "JTNRVgfj",
            "solucao": "B-2 C-2 F-2 H-1 A-4 F-1 G-5"
        },
        {
            "situacao": "TVUmipkn",
            "solucao": "C-4 E-1 D-1 H-2 F-6 B-5 G-5"
        },
        {
            "situacao": "AGImSijk",
            "solucao": "F-6 H-6 B-2 D-1 G-6 A-3 E-2"
        },
        {
            "situacao": "FmGNMjRS",
            "solucao": "D-21 E-2 D-5 G-4 A-45 B-1 E-5 G-65 H-1 F-6"
        },
        {
            "situacao": "GVJTWbap",
            "solucao": "A-3 E-6 D-2 E-5 A-31 F-1 C-4 G-2 H-6"
        },
        {
            "situacao": "AQBbCTMn",
            "solucao": "A-32 H-1 A-6 F-1 B-5 F-6 C-4 G-2 D-1 C-3"
        },
        {
            "situacao": "BFCbEpfo",
            "solucao": "C-2 H-1 C-4 F-6 E-4 G-5 H-4 A-3 B-45"
        },
        {
            "situacao": "EjFIGeJn",
            "solucao": "G-42 A-4 G-6 E-2 A-2 E-3 C-4 D-3 H-1 G-3"
        },
        {
            "situacao": "AEPfVdhn",
            "solucao": "A-2 G-1 C-1 H-1 C-3 B-4 A-3 D-5"
        },
        {
            "situacao": "IiKpahdg",
            "solucao": "G-51 H-1 A-2 B-6 E-2 D-6 C-4 A-4"
        },
        {
            "situacao": "FgGcPWmn",
            "solucao": "D-1 H-1 D-21 E-4 F-51 H-6 D-5 A-45 B-1 G-1 F-5"
        },
        {
            "situacao": "BHCGRpdh",
            "solucao": "F-6 B-3 F-2 H-1 A-32 C-3 D-3 C-4 F-4 E-5"
        },
        {
            "situacao": "GgIUJeNT",
            "solucao": "H-4 E-4 G-2 E-3 H-2 G-42 B-1 A-3 C-3"
        },
        {
            "situacao": "CNMURebp",
            "solucao": "H-1 A-3 G-2 B-2 C-2 E-4"
        },
        {
            "situacao": "JdSaWjhi",
            "solucao": "D-2 A-42 E-4 C-2"
        },
        {
            "situacao": "EkFcHJPb",
            "solucao": "F-5 H-1 G-3 A-4 D-215 G-6 B-6 C-4"
        },
        {
            "situacao": "BoGUHPej",
            "solucao": "F-3 D-346 E-34 A-3 E-6 B-1 E-2 D-3 C-3"
        },
        {
            "situacao": "BiSgUfmn",
            "solucao": "D-2 A-3 D-6 A-43 C-2 G-1 H-1 F-5"
        },
        {
            "situacao": "GIKefnjk",
            "solucao": "A-2 D-6 F-1 A-3 F-31 G-6 H-6 C-5 E-6"
        },
        {
            "situacao": "AmNfQkUh",
            "solucao": "C-2 F-5 G-4 E-4 A-3 D-56 B-1 C-4"
        },
        {
            "situacao": "DQESVick",
            "solucao": "C-4 E-3 D-2 A-4 H-5 F-1 H-6 B-5"
        },
        {
            "situacao": "GMVjbdgp",
            "solucao": "B-3 F-5 A-3 H-6 G-2 C-5 D-6"
        },
        {
            "situacao": "GhSaUVjo",
            "solucao": "H-1 G-5 A-3 D-2 C-2"
        },
        {
            "situacao": "AiDgMUcm",
            "solucao": "B-56 D-1 C-5 E-13 H-1 D-4 C-3 A-3"
        },
        {
            "situacao": "BDIeQcRj",
            "solucao": "D-5 G-4 E-6 D-6 A-2 H-6 G-5 F-1 G-6"
        },
        {
            "situacao": "DJGPVagk",
            "solucao": "E-35 H-5 D-46 A-4 D-4 C-3 B-4"
        },
        {
            "situacao": "AhBMFaHV",
            "solucao": "C-4 A-2 E-4 A-4 C-3 E-5 H-5 G-3 D-3 F-1"
        },
        {
            "situacao": "CnDeJgNi",
            "solucao": "B-1 D-6 F-2 H-6 C-4 B-6 A-4 F-1 D-5"
        },
        {
            "situacao": "DiHjOVRe",
            "solucao": "B-16 D-6 E-2 G-4 A-3 B-1 C-3"
        },
        {
            "situacao": "PgSkTbUn",
            "solucao": "B-2 D-6 G-42 E-3 D-5 H-1 A-4 B-6"
        },
        {
            "situacao": "AgPSRUWe",
            "solucao": "D-2 G-5 A-3 C-5 D-4 E-5 D-2 C-4 A-2 C-2 B-1"
        },
        {
            "situacao": "AWDEKVNT",
            "solucao": "B-6 A-2 F-1 G-2 A-3 H-1"
        },
        {
            "situacao": "BEFnGOST",
            "solucao": "D-1 B-5 F-6 D-5 H-1 C-5 G-1"
        },
        {
            "situacao": "AVKSRedf",
            "solucao": "B-5 A-3 F-1 B-2 D-2 H-5 B-15 C-4 B-2 A-2"
        },
        {
            "situacao": "JOKeNdcm",
            "solucao": "C-4 E-32 A-4 H-1"
        },
        {
            "situacao": "CSFmNPVj",
            "solucao": "C-54 H-5 E-2 A-4 C-1 G-5 D-1 H-1"
        },
        {
            "situacao": "APIaQeSo",
            "solucao": "G-3 E-4 A-3 F-5 B-4 D-2 C-4"
        },
        {
            "situacao": "DWMPRVdm",
            "solucao": "C-2 B-6 H-1 E-5 H-2 A-4"
        },
        {
            "situacao": "EVIjTeUa",
            "solucao": "E-1 C-3 F-5 G-35 C-4 D-6 F-1 A-4 H-2"
        },
        {
            "situacao": "AeEmOPRT",
            "solucao": "G-4 D-1 B-5 H-2 C-4 D-162 A-3 B-1 G-6"
        },
        {
            "situacao": "ASEiIOhj",
            "solucao": "D-6 H-6 E-5 H-4 G-6 C-4 D-3 A-3"
        },
        {
            "situacao": "GVIcUhfo",
            "solucao": "D-6 A-2 E-4 C-3 G-5 H-1 A-3 E-6 F-1 D-2"
        },
        {
            "situacao": "ADMmVain",
            "solucao": "B-5 E-4 F-2 H-1 C-3 D-1 A-3 B-3"
        },
        {
            "situacao": "AgDaGnHe",
            "solucao": "A-2 B-1 G-4 D-31 B-3 G-2 A-3 C-4 F-1 H-5 E-3"
        },
        {
            "situacao": "FPIiMcah",
            "solucao": "G-2 E-3 A-4 C-4 F-1 C-3 F-5 B-4"
        },
        {
            "situacao": "AnHUQehi",
            "solucao": "C-3 G-1 E-5 A-3 G-2 F-6 B-1"
        },
        {
            "situacao": "INTfUdcp",
            "solucao": "F-2 G-3 C-32 F-6 D-5 G-6 B-2 D-6 H-6"
        },
        {
            "situacao": "FnKpMSNV",
            "solucao": "H-1 D-5 H-5 C-4 A-46 D-6 C-6 B-1"
        },
        {
            "situacao": "BOCSacjm",
            "solucao": "G-6 C-4 H-1 E-2 A-3"
        },
        {
            "situacao": "ATBENShj",
            "solucao": "C-3 H-5 G-6 A-24 H-6 D-4"
        },
        {
            "situacao": "BHJmNWTk",
            "solucao": "G-4 C-54 G-2 F-45 E-3 B-3 A-3 D-1 G-5 H-5"
        },
        {
            "situacao": "AEFWHMPo",
            "solucao": "G-1 A-2 D-6 F-2 E-2 D-1 H-1"
        },
        {
            "situacao": "ARKMSeWh",
            "solucao": "G-5 A-3 E-32 C-4 G-2 H-1 A-2 B-4 D-2"
        },
        {
            "situacao": "AbHMQnek",
            "solucao": "D-2 G-5 A-3 F-12 H-65 F-6 C-3 E-4"
        },
        {
            "situacao": "FeIMKVUm",
            "solucao": "E-5 A-4 F-6 D-2 B-6 H-1"
        },
        {
            "situacao": "EGTabnej",
            "solucao": "F-6 G-5 A-4 C-64 H-5 B-3"
        },
        {
            "situacao": "BFEVThan",
            "solucao": "C-4 D-5 B-5 A-3 B-4 H-6 E-4 A-4"
        },
        {
            "situacao": "CJIiQgRb",
            "solucao": "E-4 D-5 H-12 D-1 H-4 G-5 C-4 A-3 C-1 F-1 E-6"
        },
        {
            "situacao": "GNORSego",
            "solucao": "D-4 E-24 B-3 A-3 F-5 G-1 D-5 H-6"
        },
        {
            "situacao": "BMKROmUc",
            "solucao": "B-2 A-3 C-5 F-1 D-5"
        },
        {
            "situacao": "JeOmgjno",
            "solucao": "C-4 E-2 D-1 E-5 F-5 A-4 B-5"
        },
        {
            "situacao": "BfDVHPbd",
            "solucao": "B-6 C-5 F-64 G-2 C-3 B-5 E-3 A-3"
        },
        {
            "situacao": "HbMTVamp",
            "solucao": "G-2 B-3 G-1 A-4 F-2 A-3 H-6 E-5 C-3"
        },
        {
            "situacao": "BkJTNbRV",
            "solucao": "H-3 F-2 A-31 E-2 A-3 D-2 H-1 B-6 D-1 E-3 G-5"
        },
        {
            "situacao": "AcBeOhQb",
            "solucao": "B-6 E-4 H-2 B-32 C-3 H-1 A-32 F-1 D-5"
        },
        {
            "situacao": "IkKjSWno",
            "solucao": "F-5 C-4 B-6 F-3 G-1 E-3 A-4 B-4 D-6"
        },
        {
            "situacao": "DKMROfae",
            "solucao": "G-2 H-1 E-1 F-5 C-2 A-3 F-6 G-1"
        },
        {
            "situacao": "ImUcWhjo",
            "solucao": "F-2 C-2 B-1 F-1 A-3 H-1 F-6 C-4 F-2 E-4 B-3"
        },
        {
            "situacao": "EIVaWcde",
            "solucao": "F-1 D-2 B-3 F-3 A-4 D-1"
        },
        {
            "situacao": "CHDUJWNd",
            "solucao": "D-1 H-6 D-6 F-65"
        },
        {
            "situacao": "AaDRJkfg",
            "solucao": "A-2 G-5 B-1 H-2 D-46 F-6 G-1 H-6"
        },
        {
            "situacao": "FOHMNVbk",
            "solucao": "A-4 D-3 H-65 A-5 E-3 F-5 C-4"
        },
        {
            "situacao": "BdMoUiWa",
            "solucao": "C-3 E-64 G-5 E-3 A-3 E-2 H-2"
        },
        {
            "situacao": "IoKVNkPb",
            "solucao": "C-4 B-6 F-5 G-5 A-3 B-1 E-3 F-1 H-1"
        },
        {
            "situacao": "BECfDVUa",
            "solucao": "E-3 D-5 H-1 C-3 A-2 B-4 E-6 D-1 H-3"
        },
        {
            "situacao": "AkNaUdmo",
            "solucao": "C-4 F-5 G-1 H-6 B-5 A-3 E-5"
        },
        {
            "situacao": "EmInOReo",
            "solucao": "B-1 E-2 G-1 H-1 B-21 A-3 D-1"
        },
        {
            "situacao": "AOCIEKej",
            "solucao": "E-5 F-5 G-6 H-6 A-23"
        },
        {
            "situacao": "ADQkVbfp",
            "solucao": "C-34 G-5 D-6 B-5 G-3 F-2 B-3 A-3"
        },
        {
            "situacao": "BNISMmPk",
            "solucao": "H-6 D-2 B-26 A-4 D-6 F-1 H-5 E-2"
        },
        {
            "situacao": "HkJcMWQh",
            "solucao": "E-23 B-5 D-1 H-12 B-1 A-3"
        },
        {
            "situacao": "FUGoHQcm",
            "solucao": "G-62 F-15 A-4 D-5 H-1 D-16 A-6"
        },
        {
            "situacao": "CiJKNkSc",
            "solucao": "E-1 A-3 H-1 F-5 B-1 A-6 F-6 E-2 G-2"
        },
        {
            "situacao": "AkHaMTgp",
            "solucao": "F-3 A-3 F-26 H-65 B-5 E-3 C-4 F-4"
        },
        {
            "situacao": "DhIkJjUa",
            "solucao": "E-4 B-1 G-3 D-6 B-5 G-5 E-4 B-1 C-3 H-21 F-6 A-4"
        },
        {
            "situacao": "AkKiNdOo",
            "solucao": "G-3 D-6 F-1 A-32 F-5 A-4 C-46 B-6 H-1"
        },
        {
            "situacao": "BHKjQecd",
            "solucao": "H-6 E-5 B-2 G-1 D-6 A-32 D-1 F-6"
        },
        {
            "situacao": "AeOmQagj",
            "solucao": "G-2 H-6 F-2 A-3 D-1 F-1 A-2 G-6 E-5"
        },
        {
            "situacao": "CJGPKieo",
            "solucao": "D-6 G-6 D-5 A-3 C-3 F-1 C-1 H-1 D-3"
        },
        {
            "situacao": "EFGTInQh",
            "solucao": "E-4 B-4 D-6 B-5 G-5 A-4 H-1 A-5 F-16"
        },
        {
            "situacao": "CGFVUjio",
            "solucao": "D-6 G-1 C-5 H-1 B-2 G-5 E-1 F-6"
        },
        {
            "situacao": "BkNpQfSg",
            "solucao": "C-3 B-5 A-3 H-2 E-4 F-5 G-2 H-1"
        },
        {
            "situacao": "AFCdPhap",
            "solucao": "H-6 A-2 C-3 B-5 D-6 G-1 F-16"
        },
        {
            "situacao": "GSHJUmfi",
            "solucao": "G-6 B-1 H-6 D-5 H-1 G-5 F-1"
        },
        {
            "situacao": "EKGkTaVc",
            "solucao": "E-215 C-3 B-5 G-5 F-1 D-65 A-4"
        },
        {
            "situacao": "BdKRWfae",
            "solucao": "B-6 G-2 B-2 C-4 A-3 B-4 D-5"
        },
        {
            "situacao": "BoDWEMFj",
            "solucao": "A-3 G-4 B-6 C-3 B-2 H-1 E-4 F-2"
        },
        {
            "situacao": "AQDdHjaf",
            "solucao": "A-2 B-3 C-3 H-5 D-6 F-6 A-3 G-2 D-2 E-3"
        },
        {
            "situacao": "CGDVNkWo",
            "solucao": "G-6 H-1 D-6 F-6 B-2 F-5 H-61"
        },
        {
            "situacao": "BbMPRpSf",
            "solucao": "D-2 E-4 C-2 H-6 E-1 F-1 G-2 B-2 A-3"
        },
        {
            "situacao": "BPMmRhcj",
            "solucao": "F-6 E-46 F-2 A-3 C-2 D-1 H-6"
        },
        {
            "situacao": "AMCVaokp",
            "solucao": "B-3 F-1 A-3 G-6 C-4 E-2 C-2 H-1"
        },
        {
            "situacao": "CpDhQTRn",
            "solucao": "H-2 B-1 E-4 B-6 C-4 D-1 G-5 A-3 E-15 H-1"
        },
        {
            "situacao": "ABEgFSOk",
            "solucao": "D-1 C-5 H-6 C-4 E-5 C-6 F-1 D-6"
        },
        {
            "situacao": "ApCkDUdo",
            "solucao": "D-6 B-6 D-5 F-6 H-1 F-1 H-6 G-6 A-2"
        },
        {
            "situacao": "AbFROnop",
            "solucao": "D-4 E-34 C-4 A-3 F-1"
        },
        {
            "situacao": "AUFTJeNS",
            "solucao": "C-5 A-32 F-6 D-16 H-2 A-4 D-2 C-3"
        },
        {
            "situacao": "BeDfHhIM",
            "solucao": "A-2 B-65 H-326 D-6 F-1 E-3 B-1"
        },
        {
            "situacao": "FaGbJmWo",
            "solucao": "D-4 F-2 C-2 G-6 E-4 G-4 A-4 B-2 C-4"
        },
        {
            "situacao": "AmBoHWIj",
            "solucao": "D-5 E-3 H-1 C-3 D-1 B-1 H-6 A-3 F-5"
        },
        {
            "situacao": "AKChJMNQ",
            "solucao": "E-4 D-6 G-24 E-6 A-2 G-5 C-4 H-5 B-5"
        },
        {
            "situacao": "DGIcJVNg",
            "solucao": "B-2 D-62 C-35 H-1 A-4 E-4"
        },
        {
            "situacao": "BcISKPmp",
            "solucao": "G-21 H-6 G-4 E-4 A-3 D-2 C-4"
        },
        {
            "situacao": "BOJQVkcp",
            "solucao": "A-32 H-61 E-6 G-1 F-6"
        },
        {
            "situacao": "IRSfaich",
            "solucao": "E-212 D-6 E-4 D-5 A-4 B-5 C-3 B-4"
        },
        {
            "situacao": "COKaWijo",
            "solucao": "G-6 D-1 F-15 D-2 E-6 A-3 H-1"
        },
        {
            "situacao": "DSTmfjkn",
            "solucao": "D-1 E-6 C-13 A-4 C-5 H-1 E-4 F-6 G-5"
        },
        {
            "situacao": "EPSgVoWb",
            "solucao": "B-1 E-4 B-3 F-6 B-4 H-2 G-5 C-3 A-4"
        },
        {
            "situacao": "DOIdMeRa",
            "solucao": "B-2 A-3 G-4 D-5 E-3 D-1 H-2 F-6 H-1 E-2"
        },
        {
            "situacao": "DROPSfan",
            "solucao": "B-5 G-3 F-6 C-1 A-3 G-1 E-2 H-1"
        },
        {
            "situacao": "AoCJDiPS",
            "solucao": "B-6 E-43 H-1 E-1 D-5 H-3 B-1 A-3 F-6 C-4"
        },
        {
            "situacao": "CPMkNdQR",
            "solucao": "B-6 E-1 C-2 E-3 C-3 B-3 A-3 C-1 D-6"
        },
        {
            "situacao": "BkDPFGae",
            "solucao": "C-2 H-5 D-35 C-4 E-5 B-6 E-4 B-4 A-3 F-3"
        },
        {
            "situacao": "AoEKGaVn",
            "solucao": "C-5 G-4 D-4 C-3 H-1 E-3 A-343 F-2"
        },
        {
            "situacao": "COTfVcdo",
            "solucao": "A-3 D-5 G-4 F-2 G-6 F-4 D-56 F-1 H-1"
        },
        {
            "situacao": "BEJPMRco",
            "solucao": "D-46 E-2 G-1 H-1 A-2 D-2 F-6"
        },
        {
            "situacao": "EQFfHmKj",
            "solucao": "D-6 G-5 F-1 B-1 H-6 D-5 G-3 B-5 A-4 C-4"
        },
        {
            "situacao": "BFCoOQTd",
            "solucao": "A-3 B-4 E-2 H-1 D-16 A-2 G-2 C-3"
        },
        {
            "situacao": "CgDhMVNo",
            "solucao": "G-1 A-34 H-1 D-6 F-5 D-1 B-1 G-3 C-4 E-3"
        },
        {
            "situacao": "AoMWOPSp",
            "solucao": "A-3 C-2 H-1 D-5 G-31 A-6 H-6 B-1"
        },
        {
            "situacao": "CkHiQRem",
            "solucao": "G-6 E-4 C-3 B-6 G-4 A-3 G-1 F-54 H-1 D-6"
        },
        {
            "situacao": "CkEoHTIS",
            "solucao": "H-3 C-4 H-2 G-3 A-3 G-5 B-6 E-3 D-1"
        },
        {
            "situacao": "CaHKTdfo",
            "solucao": "B-1 C-2 G-6 B-2 A-3 E-1 F-6 H-1"
        },
        {
            "situacao": "ATBfJjMO",
            "solucao": "D-6 H-5 A-3 D-5 A-2 G-1 F-6 D-6 A-4 D-2 C-3 E-4"
        },
        {
            "situacao": "ASEfNgUm",
            "solucao": "E-6 B-2 A-2 B-1 F-1 H-1 B-5 E-3 C-4 D-6 A-4"
        },
        {
            "situacao": "BJFkKWUo",
            "solucao": "C-53 B-4 C-6 A-3 D-6 E-4 H-1"
        },
        {
            "situacao": "MOTbacgp",
            "solucao": "F-3 C-3 F-5 D-1 B-5 H-6 F-6 H-5 F-3 A-3"
        },
        {
            "situacao": "CDNTgijp",
            "solucao": "A-4 B-4 D-3 F-5 B-3 H-6 C-3 E-1 A-3"
        },
        {
            "situacao": "DWJeUcbj",
            "solucao": "E-1 C-3 F-1 G-2 C-4 A-3"
        },
        {
            "situacao": "MnPWRkSb",
            "solucao": "D-5 E-5 C-4 A-2 C-1 A-35 B-1 F-5 E-4"
        },
        {
            "situacao": "CgFPMORc",
            "solucao": "D-2 F-51 C-5 D-6 H-1 B-1 E-2 G-5"
        },
        {
            "situacao": "HKNPSmjp",
            "solucao": "B-5 C-2 G-6 F-1 E-1 H-6"
        },
        {
            "situacao": "FjGeKnik",
            "solucao": "E-5 B-6 H-5 C-3 B-315 C-2 A-4 B-3 E-3 F-1"
        },
        {
            "situacao": "BFEHOdRm",
            "solucao": "F-6 A-2 C-3 B-5 D-2 E-1 H-12 F-1"
        },
        {
            "situacao": "AcMnNaem",
            "solucao": "G-5 B-6 H-124 C-3 G-5 E-4 D-6 A-3"
        },
        {
            "situacao": "EVUhejgn",
            "solucao": "A-4 D-12 H-1 G-2"
        },
        {
            "situacao": "GjOpaghk",
            "solucao": "B-6 C-4 D-6 H-5 B-4 D-4 A-3"
        },
        {
            "situacao": "AHCTMVan",
            "solucao": "C-3 F-54 C-4 H-6 E-3 B-4 A-3"
        },
        {
            "situacao": "CpQgWafi",
            "solucao": "H-1 E-4 A-4 H-5 F-2 G-6 B-6 D-2 C-4 H-2 A-2"
        },
        {
            "situacao": "EHIaQpWi",
            "solucao": "F-1 D-1 H-6 G-5 D-2 A-4 C-4 B-2 F-6"
        },
        {
            "situacao": "BTEgJnck",
            "solucao": "C-53 G-1 D-1 F-1 A-3 C-5 G-35 E-4 H-6"
        },
        {
            "situacao": "BRDPKfgj",
            "solucao": "F-6 B-5 C-53 A-31 G-1 H-6"
        },
        {
            "situacao": "MWOjPiRn",
            "solucao": "E-46 A-2 G-5 B-5 F-64 G-4 D-6 F-6 H-1"
        },
        {
            "situacao": "AKGiMcRV",
            "solucao": "D-1 B-5 C-32 B-3 E-23 A-3 G-5"
        },
        {
            "situacao": "AhIVNjSU",
            "solucao": "H-3 F-5 B-61 E-3 G-2 C-3 A-3"
        },
        {
            "situacao": "FhIVOnUf",
            "solucao": "G-4 D-15 G-2 B-1 G-6 A-4 F-1 H-6"
        },
        {
            "situacao": "COIWQiTg",
            "solucao": "E-46 H-21 D-5 F-1 C-3 A-3"
        },
        {
            "situacao": "FhGSHIfm",
            "solucao": "D-3264 G-5 D-6 A-46 G-6 H-1 B-1"
        },
        {
            "situacao": "DSHePmTn",
            "solucao": "E-3 G-2 F-1 H-1 F-3 D-5 G-5 B-1 C-3 A-4"
        },
        {
            "situacao": "CbDWdegm",
            "solucao": "B-1 C-3 G-1 H-1 B-3 A-3 H-2"
        },
        {
            "situacao": "ENMoTadj",
            "solucao": "C-3 H-5 E-3 A-4 F-2 B-3"
        },
        {
            "situacao": "AMFJIdbe",
            "solucao": "G-2 C-4 A-3 E-4 B-2 F-6 H-5 D-4"
        },
        {
            "situacao": "AMBFKmUi",
            "solucao": "B-1 H-6 G-6 E-5 F-1 D-5"
        },
        {
            "situacao": "BGKnObWe",
            "solucao": "F-1 B-2 A-32 D-1 G-5 H-6 C-4"
        },
        {
            "situacao": "AOIkRgdp",
            "solucao": "F-1 H-6 A-3 E-5 D-6 E-4 C-3"
        },
        {
            "situacao": "EgKVSjek",
            "solucao": "D-5 F-5 E-32 C-4 A-4 F-2 D-2 B-2"
        },
        {
            "situacao": "AgJWafmp",
            "solucao": "A-3 C-3 D-4 B-2 F-5 C-4 F-2 G-2 E-2"
        },
        {
            "situacao": "AMFfIcRe",
            "solucao": "A-3 H-6 E-4 D-5 E-3 C-4 B-2 G-5"
        },
        {
            "situacao": "AECFHjOh",
            "solucao": "F-5 B-46 F-6 C-2 H-1 C-5 H-5 D-5"
        },
        {
            "situacao": "DHOkRanp",
            "solucao": "F-1 C-2 H-6 C-6 E-5 A-4 D-6 G-1"
        },
        {
            "situacao": "HpIjSUcg",
            "solucao": "F-5 C-43 A-3 G-35 E-3 B-6 D-5"
        },
        {
            "situacao": "CgGOHeKN",
            "solucao": "E-2 H-1 A-3 B-1 A-5 C-3 E-4 F-6 G-5"
        },
        {
            "situacao": "EoFmIPek",
            "solucao": "C-4 B-5 D-1 F-3 A-4 E-3 H-5 D-3 A-1 B-1"
        },
        {
            "situacao": "BECdOnSa",
            "solucao": "E-3 D-5 A-3 B-4 D-1 F-1 C-4 H-2"
        },
        {
            "situacao": "BnJOKpNd",
            "solucao": "F-6 E-4 D-31 B-16 H-6 B-2 A-3 E-5"
        },
        {
            "situacao": "AjFKHkIi",
            "solucao": "F-6 A-3 F-4 H-1 D-5 B-61 F-6 H-5 A-1 C-4"
        },
        {
            "situacao": "BKPpRnSk",
            "solucao": "E-4 H-6 A-3 H-5 B-4 D-6 C-4 F-1 G-3 E-5"
        },
        {
            "situacao": "ABCeIUho",
            "solucao": "B-3 E-3 C-3 E-4 G-1 D-6 E-1 H-1 A-3"
        },
        {
            "situacao": "FoKkOpPb",
            "solucao": "C-4 B-61 G-3 E-4 H-2 A-4 E-3 C-2 F-6"
        },
        {
            "situacao": "OUQfbnij",
            "solucao": "A-4 D-5 C-4 F-1"
        },
        {
            "situacao": "BDChOpko",
            "solucao": "C-3 E-1 B-5 C-64 E-3 G-5 B-3 E-4 B-4 A-3"
        }
    ];