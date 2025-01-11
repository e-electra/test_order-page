export default function (mode) {
    return {
        pages_root_path: mode === 'development' ? '/' : '/base/',
        assets_root_path: mode === 'development' ? '/src/' : '/base/',
        link_to: '',
    }
}
